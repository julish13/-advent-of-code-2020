const parseInput = (input) => {
  return input.split(`\n`).map((string) => {
    const array = string.split(/[\s:-]+/);
    array[0] = Number(array[0]);
    array[1] = Number(array[1]);
    return array;
  });
};

export const part1 = (input) => {
  const data = parseInput(input);
  let countPasswords = 0;
  for (const [min, max, letter, string] of data) {
    const countLetters = string.split(``).filter((item) => item === letter)
      .length;
    if (countLetters >= min && countLetters <= max) {
      countPasswords++;
    }
  }
  return countPasswords;
};

export const part2 = (input) => {
  const data = parseInput(input);
  let countPasswords = 0;
  for (const [first, second, letter, string] of data) {
    if (
      (string[first - 1] === letter || string[second - 1] === letter) &&
      !(string[first - 1] === letter && string[second - 1] === letter)
    ) {
      countPasswords++;
    }
  }
  return countPasswords;
};
