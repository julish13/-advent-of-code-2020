import assert from "assert";
import { INPUT } from "./fixtures/input.fixture.js";
import { part1, part2 } from "./day-3.js";

describe(`Day 3 - Part One`, () => {
  it(`should return correct answer with input`, () => {
    assert.strictEqual(part1(INPUT), 7);
  });
});

describe(`Day 3 - Part Two`, () => {
  it(`should return correct answer with input`, () => {
    assert.strictEqual(part2(INPUT), 336);
  });
});
