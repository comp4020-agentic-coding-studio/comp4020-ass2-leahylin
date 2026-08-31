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
});
