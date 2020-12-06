import assert from "assert";
import { INPUT } from "./fixtures/input.fixture.js";
import { part1} from "./day-2.js";

describe(`Day 1 - Part One`, () => {
  it(`should return correct answer with input`, () => {
    assert.strictEqual(part1(INPUT), 2);
  });
});
