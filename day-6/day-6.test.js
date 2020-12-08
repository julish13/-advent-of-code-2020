import assert from "assert";
import { INPUT } from "./fixtures/input.fixture.js";
import { part1, part2 } from "./day-6.js";

describe(`Day 6 - Part One`, () => {
  it(`should return correct answer with input`, () => {
    assert.strictEqual(part1(INPUT), 11);
  });
});

describe(`Day 6 - Part Two`, () => {
  it(`should return correct answer with input`, () => {
    assert.strictEqual(part2(INPUT), 6);
  });
});
