# Your harness

The platform under you is fixed and documented in `README.md`, and the
[course website](https://comp.anu.edu.au/courses/comp4020-agentic-coding-studio/)
publishes this deliverable's brief and spec. Read both before you plan or
build; what the agent needs to carry from either is your call.

## How to work in here

Carried forward from week 6 (crit5) — general working habits, not tied to any
one stack:

- Keep the dev server running (`pnpm dev`) so you see changes as you make them.
- A dev server more than a session old is a liability, not a convenience —
  restart it after any content-file edit that isn't showing up, and check
  `lsof -iTCP -sTCP:LISTEN -P -n | grep node` for duplicate/stale servers from
  earlier sessions before trusting what a given port shows.
- Run `pnpm check` before you push.
- Open the page in a browser and look at it. The rendered page is the truth;
  your mental model of it isn't.
- When a check fails, read its output before you change anything.
- Never commit a red state.

## Things this repo has already caught me on

Learned the hard way in this repo. Each one cost a red build.

- **Raw `<a href="/...">` in a `.astro` file breaks the base path.** Markdown
  links in `.md`/`.mdx` are rewritten for the GitHub Pages sub-path
  automatically; hand-written anchors in `.astro` are emitted verbatim and the
  theme's base check fails the build. In `.astro`, build the href from
  `import.meta.env.BASE_URL` (trim its trailing slash first, since the join
  differs depending on which form it takes). The theme's `<Card href>` handles
  this itself — the problem is only raw anchors.
- **A colon in an unquoted YAML frontmatter value is a parse error.** A
  `description:` running onto a second line and containing `": "` kills the
  content sync with a bare "can not read an implicit mapping pair". Use a
  folded block scalar (`description: >-`) or quote the whole string.
- **Deleting a `people` entry breaks every `teachers:` and `related:` ref
  pointing at it.** The content refs are validated, so replace the referring
  pages in the same change rather than leaving the tree red in between.
- **The dev server serves stale optimised images.** Overwriting a file in
  `src/assets/images/` keeps the same URL, so the browser and
  `node_modules/.astro/assets/` both hold the old one. Hard-refresh before
  concluding an image did not change; `rm -rf node_modules/.astro .astro dist`
  if a build still shows it.

## Failures the checks cannot see

The four above all turned the build red, which means they announced themselves.
These did not. `pnpm check` passed, the accessibility and link checks passed,
and the page was still wrong — which is the class of failure that reaches a
marker, and the reason "open the page and look at it" is the first rule in this
file rather than a nicety.

- **A theme lookup table with no entry for your value renders nothing, silently.**
  `roleLabels` in `PeopleGrid.astro` maps `convenor|tutor|guest|other`; a person
  with `role: co-convenor` resolved to `undefined`, so that card rendered no role
  line while the other did, and the two disagreed for no visible reason. Its
  `roleOrder` twin has the same gap and sorts the unknown value last via `?? 99`.
  Adding a value to frontmatter is not enough — add it to the map too, and check
  both the grid component and the detail route.
- **`heroTitle` does nothing without `heroImage`.** BaseLayout gates the hero on
  `heroTitle && heroImage`, and `MdxPageLayout` renders the lead but never an
  `<h1>`, so four MDX pages shipped with a `heroTitle` in frontmatter and no
  visible heading at all. Count headings in `dist/` rather than trusting the
  frontmatter to have had an effect.
- **The hero crops hard and the theme's cover treatment assumes photography.**
  `.at-hero` is a ~4.4:1 band with `object-fit: cover` and a dark scrim for white
  text. Art that is a centred subject on empty ground gets enlarged and cut off
  instead. Nothing errors; it just looks wrong.
- **Two near-identical creams read as a seam.** `--at-bg-alt` is computed off the
  primary and does not match a baked raster's own background. A theme token
  cannot follow an image, so sample the colour out of the asset and set it
  literally when the two have to meet.
- **A long-running dev server can silently go stale and render content
  collections as empty, not wrong.** `getPublishedCollection` never throws on
  stale data — it just returns whatever it last synced. A dev server left
  running across a content-frontmatter edit (weight/date changes on the
  assessments, in one case) kept serving an empty `AssessmentsGrid`/
  `AssessmentWeightChart` — a real `<div class="at-card-grid"></div>` with
  nothing inside, no error anywhere — while a freshly started server on the
  same code showed the content correctly. `pnpm check` builds fresh every
  time, so it can't see this; only a browser pointed at a long-lived `pnpm
  dev` process can. If content looks missing (not malformed — genuinely
  gone) and the source file is correct, suspect the dev server's age before
  the code: check how long it's been running (`ps -o etime -p <pid>`) against
  the content file's mtime, and restart it rather than debugging the
  component.
- **A bare `<hr>` is 0px wide as a direct child of `.at-main`.** The UA
  stylesheet gives `hr` `margin-inline: auto`. In normal block layout that is
  harmless — the footer's `<hr>`s fill their container — but `.at-main` is a
  `display: grid` subgrid, and auto inline margins on a grid item suppress the
  default `stretch`, so the element shrinks to fit-content: zero, for an empty
  element. The border paints perfectly; there is just no width to paint across.
  Nothing errors, the rule is right there in devtools, and darkening the border
  colour changes nothing. Add `margin-inline: 0` (or `width: 100%`) to any `hr`
  you put directly in `.at-main`. The same trap applies to any empty
  block-level child of that grid.
- **Reason about a CSS symptom for at most one round, then screenshot it.**
  Three separate colour "fixes" went out on the theory that the line above was
  too faint, because the served CSS kept looking correct — it *was* correct.
  Chrome Canary is installed and headless-screenshots any dev URL:
  `"/Applications/Google Chrome Canary.app/Contents/MacOS/Google Chrome Canary"
  --headless --disable-gpu --screenshot=/tmp/shot.png --window-size=900,700
  --virtual-time-budget=6000 <url>`, then Read the png. For computed styles,
  add `--remote-debugging-port=9222 --user-data-dir=/tmp/cdpprofile` and drive
  CDP from a node script over the global `WebSocket`; `getComputedStyle` plus
  `getBoundingClientRect` on the element and its parent chain found this in one
  shot. `curl` shows you the CSS that was *sent*, never the layout that
  resulted — the two disagreeing is the whole bug class this section is about.

## What the submission gate actually checks

`pnpm check:evidence` is stricter than `pnpm check` and is easy to leave until
too late. It fails on: any surviving `STARTER_CONTENT` comment, a `PROCESS.md`
that still holds the template comment, a cited commit SHA that does not resolve
in this repo, and **the sha256 of each starter image** — `card.png`,
`hero-home.avif` and the two shipped people portraits. Deleting an image passes;
leaving the original does not.
