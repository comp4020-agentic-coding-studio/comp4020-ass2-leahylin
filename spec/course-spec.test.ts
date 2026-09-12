import { readFileSync } from "node:fs";
import { resolve } from "node:path";
import { describe, expect, it } from "vitest";

interface ApiNode {
  id: string;
  type: string;
  meta?: Record<string, unknown>;
}

interface CourseApi {
  course: { code: string };
  nodes: ApiNode[];
}

const api = JSON.parse(readFileSync(resolve("dist/api/index.json"), "utf8")) as CourseApi;
const byType = (type: string) => api.nodes.filter((node) => node.type === type);

// Assigned when this repo was provisioned (commit 32ca47e, "course code:
// SLOP1364") — the spec requires keeping these regardless of the level digit
// chosen.
const PROVISIONED_DIGITS = "364";

describe("Assignment 2 spec", () => {
  it("keeps the course code's provisioned digits", () => {
    expect(api.course.code.endsWith(PROVISIONED_DIGITS)).toBe(true);
  });

  it("schedules all twelve teaching weeks", () => {
    const weeks = byType("sessions")
      .map((node) => node.meta?.week)
      .sort((a, b) => Number(a) - Number(b));
    expect(weeks).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]);
  });

  it("has at least one lecture with a linked deck", () => {
    const lecturesWithDecks = byType("lectures").filter((node) =>
      /^\/decks\/[a-z0-9-]+\/$/.test(String(node.meta?.slides ?? "")),
    );
    expect(lecturesWithDecks.length).toBeGreaterThan(0);
  });

  it("weights its assessments to add up to 100%", () => {
    const total = byType("assessments").reduce(
      (sum, node) => sum + Number(node.meta?.weight ?? 0),
      0,
    );
    expect(total).toBe(100);
  });

  // MarkingModel.astro only renders the P/CR/D/HD band columns when every
  // criterion has `bands` — one criterion missing them silently drops the
  // whole rubric table back to Criterion/Weight, with no build or schema
  // error. A weighted assessment that meant to publish a rubric but forgot
  // one criterion's bands would ship silently broken.
  it("gives every criterion bands, or none, on each weighted assessment", () => {
    for (const node of byType("assessments")) {
      const marking = node.meta?.marking as
        | { mode: string; criteria: { name: string; bands?: unknown }[] }
        | undefined;
      if (marking?.mode !== "weighted") continue;
      const withBands = marking.criteria.filter((c) => c.bands).length;
      expect(
        withBands === 0 || withBands === marking.criteria.length,
        `${node.id} has bands on ${withBands}/${marking.criteria.length} criteria`,
      ).toBe(true);
    }
  });

  // `module` on lectures/sessions is a free-text frontmatter string; the
  // colour-coding and badge index everywhere on the site (LecturesGrid,
  // SessionsGrid, homepage, both detail pages) are computed independently
  // from `week` via Math.ceil(week / 3) and never read this string. Nothing
  // in the schema ties the two together, so a week whose typed-out `module`
  // text doesn't match its 3-week block, or that disagrees between a lecture
  // and its session, would show the wrong colour with no build error.
  it("keeps each week's module label consistent with its 3-week block", () => {
    const expectedIndex = (week: number) => Math.min(4, Math.ceil(week / 3));
    const byWeek = new Map<number, string>();

    for (const node of [...byType("lectures"), ...byType("sessions")]) {
      const week = Number(node.meta?.week);
      const moduleLabel = String(node.meta?.module ?? "");
      const index = expectedIndex(week);

      expect(
        moduleLabel.startsWith(`Module ${index}`),
        `${node.id} (week ${week}) has module "${moduleLabel}", expected to start with "Module ${index}"`,
      ).toBe(true);

      const seen = byWeek.get(week);
      if (seen) {
        expect(moduleLabel, `${node.id} disagrees with another week-${week} node on module label`).toBe(
          seen,
        );
      } else {
        byWeek.set(week, moduleLabel);
      }
    }
  });
});
