/**
 * Unit tests for the pure lead-matching function.
 * Run with:  npx tsx scripts/leadMatching.test.ts
 *
 * No test framework needed — plain assertions so it stays dependency-free.
 */
import assert from "node:assert/strict";
import {
  matchLead,
  isDivisionId,
  SERVICE_TREE,
  type LeadAnswers,
} from "@/lib/leadMatching";

let passed = 0;
function test(label: string, fn: () => void) {
  fn();
  passed += 1;
  console.log(`  ok  ${label}`);
}

const base: Omit<LeadAnswers, "division" | "subService"> = {
  budget: "$15k – $50k",
  timeline: "1 – 3 months",
  name: "Jane Doe",
  email: "jane@example.com",
  phone: "",
};

test("matches each division to its specialist + deep link", () => {
  for (const division of SERVICE_TREE) {
    for (const sub of division.subServices) {
      const persona = matchLead({
        ...base,
        division: division.id,
        subService: sub.slug,
      });
      assert.equal(persona.divisionId, division.id);
      assert.equal(persona.name, division.specialistName);
      assert.equal(persona.title, division.specialistTitle);
      assert.equal(persona.serviceUrl, `/${division.id}/${sub.slug}`);
      assert.ok(persona.description.length > 0);
      assert.ok(persona.bookingUrl.startsWith("/"));
    }
  }
});

test("unknown sub-service falls back to the division landing page", () => {
  const persona = matchLead({
    ...base,
    division: "ai-automation",
    subService: "does-not-exist",
  });
  assert.equal(persona.serviceUrl, "/ai-automation");
});

test("throws on an unknown division", () => {
  assert.throws(() =>
    matchLead({ ...base, division: "nope", subService: "x" }),
  );
});

test("isDivisionId guards correctly", () => {
  assert.equal(isDivisionId("growth-marketing"), true);
  assert.equal(isDivisionId("digital-products"), true);
  assert.equal(isDivisionId("marketing"), false);
  assert.equal(isDivisionId(123), false);
  assert.equal(isDivisionId(undefined), false);
});

console.log(`\n${passed} test group(s) passed.`);
