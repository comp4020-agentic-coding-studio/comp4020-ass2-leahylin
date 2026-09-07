# Assignment 2 plan

Working notes for building the SlopU course site.

## Course concept: The Political Economy of the Refrigerator

### Central thesis

The refrigerator is not a neutral appliance. It is the control centre of
micro-politics in the modern household, and an **illusory fortress** against
temporal decay. By manufacturing *expiration anxiety* and *hoarding
illusions*, it actively colludes with and sustains late capitalism's logic of
food waste and overconsumption.

### The single idea the semester unpacks

**The fridge sells you time, and the bill arrives as waste.**

The promise is preservation: buy in bulk, decay is suspended, nothing is lost.
The course spends twelve weeks showing that this promise is the *mechanism* of
the loss — that a household throwing away more food than its
pre-refrigeration ancestors is not failing to use the appliance properly, but
using it exactly as designed. Every week turns the same idea one more degree:
the fortress is what fills the bin.

### The 12-week arc

Four named modules of three weeks. Each module has its own objective, and each
week states the claim it inherits from the one before.

**Module 1 — Disenchantment: the commodification of cold and the myth of
modernity (weeks 1–3).** *Objective:* shatter the common-sense notion that the
refrigerator is a natural necessity, revealing it as a specific historical,
technological and gendered construction.

1. **The birth of artificial cold: from the ice trade to Freon.** *Key
   question:* is "freshness" an objective physical state or a cultural myth
   constructed by cold-chain technology? *Tutorial:* sensory blind tasting —
   fresh, three-days-refrigerated, and freeze-dried samples. *Reading:* Rees,
   _Refrigeration Nation_.
2. **The totem of modernity: advertising, gender and the second shift.** *Key
   question:* what is a refrigerator advertisement selling, if not
   refrigeration? *Tutorial:* visual semiotics workshop on 1950–1980 posters —
   who operates the fridge, what is the white enamel doing? *Reading:* Cowan,
   _More Work for Mother_.
3. **The terminal of the global supply chain: the erasure of locality.** *Key
   question:* what does a kitchen lose when every ingredient is available in
   every month? *Tutorial:* food-mileage map — photograph three off-season
   items, reverse-track origins and cost them. *Reading:* Freidberg, _Fresh_;
   Twilley, _Frostbite_.

**Module 2 — Micropolitics: power and symbols within domestic space (weeks
4–6).** *Objective:* treat the refrigerator as a micro-sociological laboratory,
dissecting power relations and identity performances in family and share-house
space.

4. **Who holds the right to refrigerate?** *Key question:* how does vertical
   space inside the fridge map onto household power? *Tutorial:* "Fridge
   Archaeology" — the class builds one power map marking authority zones,
   marginal zones and tragedy-of-the-commons zones. *Reading:* Miller; Shove.
5. **The semiotics of leftovers: frugality and the boundaries of disgust.**
   *Key question:* when does food become leftovers, and leftovers become
   rubbish? *Tutorial:* structured ethical debate — roommate A binned roommate
   B's unlabelled week-old food. *Reading:* Douglas, _Purity and Danger_.
6. **The fridge door as curatorial space.** *Key question:* what personas are
   we constructing in public digital versus semi-private physical space?
   *Tutorial:* dual curation — compare your fridge door with your feed. Doubles
   as the ethnography workshop. *Reading:* Goffman.

**Module 3 — The tyranny of time: anxiety, illusions, and complicity with
capital (weeks 7–9).** *Objective:* strike at the core of the course —
deconstruct how the refrigerator manipulates our perception of time and drives
overconsumption.

7. **The tyranny of labels.** *Key question:* who wrote the date, what does it
   legally mean, and what does obeying it cost? *Tutorial:* "Label Forensics" —
   bring 5–10 items, consult the regulations, draft an honest label. **This is
   the deck week.** *Reading:* Stuart, _Waste_.
8. **The illusion of preservation and systemic waste.** *Key question:* if the
   fridge preserves, why does the household throw away more? *Tutorial:*
   personal waste audit — a week of records, costed in money and calories.
   *Reading:* Bauman, _Liquid Modernity_; Stuart.
9. **Hoarding and doomsday psychology.** *Key question:* is consumer behaviour
   the purchase of emotional value rather than use value? *Tutorial:*
   psychological mapping — draw your ideal fridge and your anxious fridge.
   *Reading:* Evans; hoarding-psychology papers.

**Module 4 — Resistance and reconstruction: towards a post-refrigerator era
(weeks 10–12).** *Objective:* explore how to break the illusory fortress and
find more ecologically conscious and agentic alternatives.

10. **Smart fridges and surveillance capitalism.** *Key question:* who is the
    inventory really for? *Tutorial:* "Design the Dystopia" — build the
    maximally exploitative Smart Fridge 2.0, then deconstruct it. *Reading:*
    Zuboff.
11. **The de-refrigerator movement and alternative food networks.** *Key
    question:* can fermentation, ambient storage and shared provisioning
    provide a real antidote? *Tutorial:* fermentation and sharing workshop —
    make a quick pickle, or design a community pantry's rules. *Reading:*
    Kallis, _Degrowth_; food sovereignty and AFN literature.
12. **Final presentations and the unplugged celebration.** *Key question:* what
    would you keep cold if cold were expensive? *Lecture:* fifteen minutes of
    summary. *Tutorial:* five-minute final pitches, then a
    refrigerator-independent picnic — the argument in embodied form.

### How this connects to the Assignment 2 brief and spec

- **Niche and deep.** No real university runs this course, but every week
  rests on real scholarship (Rees, Cowan, Freidberg, Twilley, Miller, Shove,
  Douglas, Goffman, Stuart, Bauman, Evans, Zuboff, Kallis). Twelve weeks does
  not run out of material, and the theory load is the depth the brief asks for.
  Every citation on the site is a real book — if a reading cannot be verified
  it does not get printed, because a marker may well check.
- **One idea, not a themed grab bag.** "The fridge sells you time and the bill
  arrives as waste" is stated in week 1, proved in week 8, and answered by the
  student in week 12. Curricular coherence is the judged criterion no test can
  cover, so the arc above *is* the response to that criterion.
- **SLOPx364.** Keeps the provisioned `364` digits; the leading level digit is
  still open (see Open decisions).
- **12 dated teaching weeks.** The arc is exactly the ordered content for
  `src/content/sessions/`, which turns the currently-red "schedules all twelve
  teaching weeks" test green.
- **A real deck.** Week 7. The template's placeholder deck sits at
  `src/decks/week-01.deck.mdx` wired to `src/content/lectures/week-01.md` via
  `slides: /decks/week-01/`, so this means a new `week-07.deck.mdx` and a
  week-7 lecture pointing at `/decks/week-07/` — the `slides` field must match
  `^/decks/[a-z0-9-]+/$` (`src/content.config.ts`) or the schema rejects it.
- **Assessments summing to 100%.** 40 + 30 + 20 + 10. The
  `weightedMarking` schema also requires any per-assessment criteria to sum to
  100 *within* that assessment.
- **Voice, not content-shaped chunks.** The four movements are the guardrail:
  a week that could be dropped into a different movement without anyone
  noticing is a week that hasn't been written yet.

### Student-facing site structure

Four fixed collections plus the platform's policies page. No new page types.

- **Home** (driven by `src/course-config.ts`). The description states the
  thesis as the hook — the first thing a prospective student reads is the
  argument, not a welcome. Carries the **Fridge Audit** widget.
- **Lectures** (12, one per week). The **argument**: that week's claim, the
  theory behind it, the readings. Week 7's carries the real deck (the tyranny
  of labels); the rest have no `slides`.
- **Sessions** (12, one per week — tutorials, labelled "Session"). The
  **work**: the exercise, the fridge to actually go and look at, the artefact
  to bring back. Each frames its key question and names the claim it inherits
  from the week before, so the arc is visible while navigating rather than only
  in a syllabus table. Week 7 carries the **Label Decoder**; week 12 carries
  the **Unplugged Pledge**.
- **Assessments** (4). Each names the module it draws on, so a reader sees the
  thesis being tested rather than just graded.
- **People.** Two instructors whose disciplines match the course's method —
  Ravel reads objects (material culture, weeks 1–6 and 10–12), Nowak reads
  systems (waste measurement and consumer psychology, weeks 7–9). That it takes
  both is part of the pitch for why the course is worth taking.
- **Policies.** Functional and real. Tone stays secondary to substance here.

**The 24-page duplication risk, and the rule that manages it.** Twelve
lectures alongside twelve tutorials is the structure most at risk of the
brief's "content-shaped chunks" failure, so the division of labour is strict
and never blurred: **a lecture page states and defends a claim; a session page
asks students to do something that tests it.** If a session page could be
pasted into its lecture without anyone noticing, it hasn't been written yet.
The division suits this course unusually well — it is about looking at real
fridges, and the tutorials are where that looking happens.

### The role of interaction

Three widgets, one per structural claim, and no more. Each has to *enact* an
argument the prose can only assert; a widget that merely illustrates gets cut.

- **Fridge Audit** (home). Asks the visitor what's in their fridge right now
  and how much of it they'll actually eat. The gap between the two answers is
  the thesis, produced by the visitor about their own kitchen, before they've
  read a word of the syllabus. This is why it's on the home page and not
  buried in a week.
- **Label Decoder** (week 7). Enter or pick a date label; see what it legally
  means, what it does not mean, and what the food is actually doing on that
  date. The public version of the Label Forensics tutorial, in the one place
  the course most needs the argument to land.
- **Unplugged Pledge** (week 12). Commit to one item leaving the fridge. The
  de-refrigeration movement's actual ask, made small enough to accept — and the
  page-level equivalent of the unplugged picnic, ending the course in an action
  rather than a conclusion.

Scope discipline: build the **Label Decoder first** (it's the deck week and
the course's spine), then the **Audit**, then the **Pledge**. Any of the three
can be dropped without breaking the spec, and a widget that isn't working two
days before the deadline gets dropped rather than shipped rough.

### Site design principles

The site argues the thesis through its own construction, not just its content.

- **Anti-abundance.** Cold blues, whites and greys. Nothing warm, nothing
  appetising, no food photography that sells. The site should feel like the
  inside of the box, lit by that one bulb.
- **Anti-convenience.** Navigation is deliberate: no infinite scroll, no
  endless feed, no "related content" rabbit holes. You go to a week because
  you chose that week. Convenience is the thing under critique, so the site
  refuses to perform it.
- **Anti-neutrality.** The site takes a stance and says so. No both-sides
  framing on a course whose whole premise is an argument.
- **Anti-permanence.** The site acknowledges its own temporality rather than
  presenting as a fixed institutional artefact — surfacing when things were
  written and that they are already ageing, in keeping with a course about
  what decay does when you pretend to stop it.

**Two real constraints these principles hit** (found while reading the
template, worth knowing before design work starts, not at debug time):

1. *Anti-abundance layers, it doesn't replace.* The SlopU brand
   (`brandCss: "astro-theme-slop/slop.css"` in `astro.config.ts`) is fixed.
   The cold palette goes in `src/layouts/PageLayout.astro` as a global style
   block on top of the brand tokens — which is the documented seam for exactly
   this, per `README.md`.
2. *Anti-convenience must not become anti-accessible.* The build runs an
   accessibility check on every page (`astro-theme-university`, currently
   "no accessibility violations" across 16 pages) and it is not optional.
   Deliberate navigation is fine; low-contrast cold greys, removed focus
   states, or keyboard-inaccessible widgets will fail the build. The
   constraint is a good one — an argument nobody can read isn't an argument.

Also worth noting for anti-permanence: `spec/data-integrity.test.ts` requires
every dated item in `sessions`, `lectures` and `assessments` to fall inside
the course's `startDate`–`endDate`. Any date-shaped content in those
collections stays inside the teaching period.

### How the site reinforces the thesis rather than reading as a generic course site

- The home page opens with the argument, so the whole site is read through it.
- The Fridge Audit makes the visitor generate the thesis about their own
  kitchen before the syllabus has made its case.
- Session pages inherit the previous week's claim explicitly, so moving
  through the site *is* the semester's argument rather than a list of topics.
- The visual treatment is the argument's register: a site about manufactured
  cold that felt warm and abundant would be undercutting itself in the only
  language a marker reads in the first ten seconds.
- Anti-convenience means the site declines to be the frictionless feed that
  the course identifies as the problem.
- Nothing beyond the four collections, the policies page and three widgets.
  Restraint is part of the position: an over-stuffed site would be arguing
  against abundance while performing it.

## What's fixed vs. open

**Fixed**: the SlopU brand and theme, the four content collections and their
schemas (`src/content.config.ts`), the build pipeline, the generated course
API, and the `364` course-code suffix (`src/course-config.ts`, set in commit
`32ca47e`).

**Settled** (this session): **SLOP8364**, level 8 — postgraduate is the honest
reading of a course that sets Douglas, Goffman and Zuboff and asks for
fieldwork. Site title stays the straight **The Political Economy of the
Refrigerator**; the deadpan register is the voice, and the thesis is stated in
the description directly beneath it. Semester 1 2027, 22 Feb – 28 May.
Structure: 12 lectures + 12 sessions, sessions labelled "Session".

**Open**: per-criterion marking breakdowns inside each assessment, and which of
the three widgets survive contact with the build.

## Spec, sorted

Already automated in `spec/course-spec.test.ts`:

- course code keeps the `364` suffix
- all twelve teaching weeks scheduled — red until the twelve sessions exist
- at least one lecture links a real deck
- assessment weights sum to 100%

Shipped with the template (`spec/data-integrity.test.ts`): every dated item
stays inside the teaching period.

Only a person can judge these, which is what the thesis and arc above exist to
satisfy:

- does the curriculum hold together as one idea across the semester
- would a prospective student actually want to take it
- does the prose have a voice, or does it read as content-shaped chunks
- does the deployed site read right at both marking viewports

## Sequencing

1. ~~Pick the topic~~ — **done.**
2. ~~Sketch the twelve-week arc~~ — **done**, four movements, above.
3. ~~Draft `src/course-config.ts`~~ — **done**: SLOP8364, level 8, title,
   thesis-stating description, tags, Semester 1 2027 dates.
4. Write the twelve `lectures` — one per week, each stating that week's claim
   and its readings. Week 7's gets the real deck: new
   `src/decks/week-07.deck.mdx` and `slides: /decks/week-07/`. Retire the
   placeholder `week-01` deck.
5. Write the twelve `sessions` (tutorials) from the arc. Each carries its key
   question, the exercise, and the claim it inherits. Write them **in order** —
   the inheritance only works if the previous week exists.
6. Write the four `assessments` (40/30/20/10) on the settled dates, each naming
   the weeks it draws on.
7. Write `people` — the two instructor personas.
8. Apply the design principles in `PageLayout.astro`'s global styles, on top
   of the brand tokens. Check contrast as you go, not at the end.
9. Build the widgets in order: Label Decoder (week 7), Fridge Audit (home),
   Unplugged Pledge (week 12). Keyboard-accessible or they fail the build.
10. Add spec tests for any further checkable promises as they come up.
11. Keep `pnpm check` green as content lands, and commit at each green
    transition — those commits are what `PROCESS.md` cites.
12. Write `PROCESS.md` last, from the real history.

## Open decisions

Settled: level digit, site title, assessment dates, weekly structure — see
*What's fixed vs. open* above. Still open, and safe to decide during the build:

- per-criterion marking breakdowns inside each assessment
- whether all three widgets ship (drop order: Pledge, Audit, Decoder last)
- whether any further spec lines are worth automating as tests
