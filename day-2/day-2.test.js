import assert from "assert";
import { INPUT } from "./fixtures/input.fixture.js";
import { part1, part2 } from "./day-2.js";

describe(`Day 2 - Part One`, () => {
  it(`should return correct answer with input`, () => {
    assert.strictEqual(part1(INPUT), 2);
  });
});

describe(`Day 2 - Part Two`, () => {
  it(`should return correct answer with input`, () => {
    assert.strictEqual(part2(INPUT), 1);
  });
});
