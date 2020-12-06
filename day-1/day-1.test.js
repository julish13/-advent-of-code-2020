import assert from "assert";
import { INPUT } from "./fixtures/input.fixture.js";
import { part1, part2 } from "./day-1.js";

describe(`Day 1 - Part One`, () => {
  it(`should return correct answer with input`, () => {
    assert.strictEqual(part1(INPUT), 514579);
  });
});

describe(`Day 1 - Part Two`, () => {
  it(`should return correct answer with input`, () => {
    assert.strictEqual(part2(INPUT), 241861950);
  });
});
