# Process overview

## What I built

**SLOP8364 — *The Political Economy of the Refrigerator*** is a fictional Semester 1 2027 course arguing that the domestic fridge isn't a neutral appliance but a specific historical, technological, and gendered construction that sells convenience and bills it back in waste and anxiety. It runs across twelve lectures and twelve sessions organised into four modules that build one continuous argument — **Disenchantment, Micropolitics, The Tyranny of Time, and Resistance and Reconstruction** — tested through four escalating assessments (**Participation, Fridge Ethnography, Critical Essay, and the Counter-Fridge final project**) that move students from observing a real fridge, to critiquing the course's own theory, to proposing an alternative. The course is brought to life through three full **Reveal.js** lecture decks at its opening, turning point, and close; three embedded interactive widgets (**Waste Audit, Date-Label Decoder, and “Unplugged” Pledge**) that let students act out the method rather than just read about it; and **People** and **Policies** pages that round out the course with its instructors and practical mechanics.


## How I got here

I started by reading the brief, `README.md`, and the course-design material
first. SLOP8364 is a twelve-week course with a lot of material to organise,
so I treated the first risk as drift, not implementation: building
immediately could let the agent accumulate content and features without a
coherent semester-long argument. 

I first asked the agent to read the Assignment 2 brief and specification and create a planning document before implementation:
> **Prompt**: “Read  Assignment 2  brief and spec. Create a `PLAN.md` in the project root. Do not modify the spec or any implementation files. Do not build yet.”

This first pass established a planning boundary: the agent had to understand the requirements and produce a plan without prematurely committing to implementation. I then used a second pass to develop the chosen concept before any implementation began:
> **Prompt**:“Now update the existing `PLAN.md` to incorporate the chosen course concept: Course title: The Political Economy of the Refrigerator. Add and clearly define the course's central thesis, the semester-long narrative progression, the key questions students investigate each week, the student-facing site structure, the role of interaction…”

Recoded in [`911bd28`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-leahylin/commit/911bd28), this update fixed the thesis, the single idea the semester would unpack, the twelve-week progression, weekly questions, site structure, interaction, and scope. This gave the agent a coherent argument to work from rather than allowing implementation to determine the course structure.

From that planning process I formed a working view of what makes a good
university course: it should have a voice and a continuous argument rather
than a set of content-shaped chunks, and its assessments should carry that
argument into students' own coursework rather than test recall. I treated the
website itself as part of the argument, using principles such as
"Anti-abundance" and "Anti-convenience" rather than assuming more content
or convenience makes a better course. The plan made this explicit:
the course should be "one idea, not a themed grab bag", and the site
should use restraint in both content and interaction.

That position shaped the course around four modules —
Disenchantment, Micropolitics, The Tyranny of Time, and Resistance and
Reconstruction — developing one argument across the semester. The four assessments progress from observation to critique to
proposal, so students move the course's argument into their own work
rather than complete four interchangeable tasks.
[`1da75d0`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-leahylin/commit/1da75d0)
records the four-module syllabus, while
[`911bd28`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-leahylin/commit/911bd28)
settles the course code and dates — structure before checks.

The same philosophy changed how I directed the agent during
implementation. I did not want it optimising only for a polished-looking
site; it needed to work against what the rendered course actually did. I
encoded working discipline in `CLAUDE.md`: "the rendered page is the
truth, not your mental model of it," keep the dev server available for
inspection, run `pnpm check`, never commit a red state. I also recorded
failure modes the checks could not see: a `roleLabels` lookup missing
`co-convenor` and silently rendering no role line, a `heroTitle` having no
effect without a matching `heroImage`, a stale dev server serving old
content collections after a frontmatter edit. Each became explicit agent
guidance because it was easy to miss yet visible in the rendered site
([`0cb8557`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-leahylin/commit/0cb8557),
[`804462e`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-leahylin/commit/804462e)).

I encoded a different class of decision in `spec/course-spec.test.ts`:
facts checkable reliably. The tests require the course code to retain its
provisioned `364` suffix, all twelve teaching weeks scheduled, at least one
lecture linking a real deck, and assessment weights summing to 100%.
[`f44511b`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-leahylin/commit/f44511b)
adds these checks after the syllabus and course details were already
settled, making them constraints on an existing design rather than targets
written to pass.

I deliberately left human judgments uncoded. As `PLAN.md` puts it, only a
person can judge whether the curriculum holds together as one idea,
whether a prospective student would want to take it, whether the prose has
a voice or reads as content-shaped chunks, and whether the deployed site
reads right at both marking viewports. The commit history shows why this
mattered:
[`804462e`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-leahylin/commit/804462e)
records failures that stayed green, while
[`ccc81ca`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-leahylin/commit/ccc81ca)
fixes a heading-order accessibility violation across the decks. The
harness caught some failures, but human judgment still had to interpret
what checks meant and catch what the automated system could not.
