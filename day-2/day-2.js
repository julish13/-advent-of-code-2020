import { INPUT } from "./input.js";

const parseInput = (input) => {
  return input.split(`\n`).map(string => string.split(/[\s\:-]+/));
};

export const part1 = (input) => {
  const data = parseInput(input);
  let countPasswords = 0;
  for (const [min, max, letter, string] of data) {
    const countLetters = string.split(``).filter(item => item === letter).length;
    if (countLetters >= Number(min) && countLetters <= Number(max)) {
      countPasswords++;
    }
  }
  return countPasswords;
};
