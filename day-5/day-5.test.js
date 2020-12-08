import assert from "assert";
import { INPUT } from "./fixtures/input.fixture.js";
import { part1, part2 } from "./day-5.js";

describe(`Day 5 - Part One`, () => {
  it(`should return correct answer with input`, () => {
    assert.strictEqual(part1(INPUT), 820);
  });
});

describe(`Day 5 - Part Two`, () => {
  it(`should return correct answer with input`, () => {
    assert.strictEqual(part2(INPUT), 682);
  });
});
