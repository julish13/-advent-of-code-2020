import assert from "assert";
import { INPUT1, INPUT2 } from "./fixtures/input.fixture.js";
import { part1, part2 } from "./day-4.js";

describe(`Day 4 - Part One`, () => {
  it(`should return correct answer with input`, () => {
    assert.strictEqual(part1(INPUT1), 2);
  });
});

describe(`Day 4 - Part Two`, () => {
  it(`should return correct answer with input`, () => {
    assert.strictEqual(part2(INPUT2), 4);
  });
});
