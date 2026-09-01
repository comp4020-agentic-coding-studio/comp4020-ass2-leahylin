# Assignment 2 plan

Working notes for building the SlopU course site. Not marked, not cited in
`PROCESS.md` — scratch for sequencing the work, not the process evidence
itself.

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

Four movements of three weeks. Each movement is a different way of holding the
same claim, and each week ends where the next one starts.

**Weeks 1–3 — Disenchantment.** Strip the appliance of its obviousness.

1. **The birth of artificial cold.** *Key question:* what did households have
   to stop doing — and stop knowing — once cold became something you could
   buy? Establishes the course's method: read the ordinary object for the
   relations frozen inside it.
2. **Gender and the second shift.** *Key question:* the fridge was sold as
   liberation from domestic labour, so why did the hours never fall? (Cowan's
   *More Work for Mother*, Hochschild's *The Second Shift*.) The labour didn't
   disappear; it changed shape and stayed put.
3. **Global cold chains and the erasure of locality.** *Key question:* what
   does a kitchen lose when every ingredient is available in every season?
   The one week that looks outward — and it looks outward only to explain what
   arrives in the domestic box.

**Weeks 4–6 — Micro-politics.** The interior as a jurisdiction.

4. **Spatial power in the fridge.** *Key question:* who decides what belongs
   on the top shelf, and whose food gets pushed to the back? Shelf position as
   a record of household hierarchy — and the back of the fridge as the place
   where things go to be forgotten legitimately.
5. **The semiotics of leftovers.** *Key question:* when does food become
   "leftovers," and when do leftovers become rubbish? Neither transition is
   about the food. (Douglas's *Purity and Danger* — dirt as matter out of
   place; the fridge as the machine that decides placement.)
6. **The fridge door as curatorial space.** *Key question:* the door is the
   only surface of the appliance that faces outward — what is being performed
   on it, and for whom? (Goffman's *Presentation of Self*.) Magnets, schedules
   and children's drawings as a household's front stage.

**Weeks 7–9 — The tyranny of time.** Where the thesis is proved.

7. **"Best Before" vs "Use By."** *Key question:* who wrote the date on this
   jar, what does it legally mean, and what does obeying it cost you? The
   distinction almost nobody knows, doing enormous work. **This is the deck
   week** and the spine of the course.
8. **The illusion of preservation and systemic waste.** *Key question:* if the
   fridge preserves, why does the household throw away more than it did
   before? The thesis stated plainly, with the numbers.
9. **Hoarding and doomsday psychology.** *Key question:* what is a full fridge
   *for*, if most of it will not be eaten? Scarcity feeling under conditions
   of abundance; anxiety not as a side effect but as an output the appliance is
   good at producing.

**Weeks 10–12 — Resistance.** What can actually be refused.

10. **Smart fridges and surveillance capitalism.** *Key question:* the fridge
    now watches its own contents, and you — who is that inventory really for?
    (Zuboff.) The fortress starts reporting.
11. **The de-refrigeration movement.** *Key question:* what can genuinely
    leave the fridge, and what does the answer reveal about which fears were
    ever real? Eggs, butter, tomatoes, bread — the practical and the cultural
    pulled apart.
12. **The unplugged project.** *Key question:* what would you keep cold if
    cold were expensive, and what would you have to relearn to manage without
    it? Returns explicitly to week 1's question and asks the student to answer
    it themselves.

### Assessments (sum to 100%)

Each one asks for a different kind of evidence, and three of the four require
looking at a real fridge rather than only reading about one.

- **Fridge Ethnography — 40%.** Fieldwork plus analysis: observe an actual
  fridge (their own, a shared house's, a workplace's) over a period, then read
  it with the course's frameworks. The micro-politics movement (weeks 4–6) is
  what makes this legible rather than anecdotal.
- **Critical Essay — 30%.** Apply theory to one fridge-related phenomenon —
  a date label, an advertisement, a design decision, a household rule. Draws
  chiefly on weeks 7–9.
- **"Counter-Fridge" Design Project — 20%.** Speculative design or a real
  intervention: an appliance, a protocol, or a household practice that refuses
  the thesis. Draws on weeks 10–12.
- **Participation — 10%.** The seminar depends on people bringing what they
  actually found in their own kitchens.

**Settled dates** (Semester 1 2027; weeks 1–6 from Mon 22 Feb, teaching break,
weeks 7–12 from Mon 12 Apr, ending Fri 28 May):

| Assessment      | Weight | Week | Due         |
| --------------- | ------ | ---- | ----------- |
| Ethnography     | 40%    | 7    | Fri 16 Apr  |
| Critical Essay  | 30%    | 10   | Fri 7 May   |
| Counter-Fridge  | 20%    | 12   | Fri 28 May  |
| Participation   | 10%    | 12   | Fri 28 May  |

The ethnography's fieldwork period deliberately spans the mid-semester break —
students need days in a real kitchen, not an afternoon.

### How this connects to the Assignment 2 brief and spec

- **Niche and deep.** No real university runs this course, but every week
  rests on real scholarship (Cowan, Douglas, Goffman, Zuboff, food-waste
  policy literature). Twelve weeks does not run out of material, and the
  theory load is the depth the brief asks for.
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

**The 24-page duplication risk, and the rule that manages it.** Twelve
lectures alongside twelve tutorials is the structure most at risk of the
brief's "content-shaped chunks" failure, so the division of labour is strict
and never blurred: **a lecture page states and defends a claim; a session page
asks students to do something that tests it.** If a session page could be
pasted into its lecture without anyone noticing, it hasn't been written yet.
The division suits this course unusually well — it is about looking at real
fridges, and the tutorials are where that looking happens.
- **Assessments** (4). Each names the weeks it draws on, so a reader sees the
  thesis being tested rather than just graded.
- **People.** Instructors whose disciplines match the course's method — the
  material needs someone who reads objects and someone who reads systems, and
  saying so is part of the pitch for why the course is worth taking.
- **Policies.** Functional and real. Tone stays secondary to substance here.

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
  date. Makes "tyranny of labels" concrete in the one place the course most
  needs it to land.
- **Unplugged Pledge** (week 12). Commit to one item leaving the fridge. The
  de-refrigeration movement's actual ask, made small enough to accept — the
  course ending in an action rather than a conclusion.

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
