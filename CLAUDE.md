# Your harness

The platform under you is fixed and documented in `README.md`, and the
[course website](https://comp.anu.edu.au/courses/comp4020-agentic-coding-studio/)
publishes this deliverable's brief and spec. Read both before you plan or
build; what the agent needs to carry from either is your call.

## How to work in here

Carried forward from week 6 (crit5) — general working habits, not tied to any
one stack:

- Keep the dev server running (`pnpm dev`) so you see changes as you make them.
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

## What the submission gate actually checks

`pnpm check:evidence` is stricter than `pnpm check` and is easy to leave until
too late. It fails on: any surviving `STARTER_CONTENT` comment, a `PROCESS.md`
that still holds the template comment, a cited commit SHA that does not resolve
in this repo, and **the sha256 of each starter image** — `card.png`,
`hero-home.avif` and the two shipped people portraits. Deleting an image passes;
leaving the original does not.
