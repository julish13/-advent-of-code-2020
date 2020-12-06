const parseInput = (input) => {
  return input.split(`\n`).map(Number);
};

export const part1 = (input) => {
  const numbers = parseInput(input);
  for (let number1 of numbers) {
    const number2 = numbers.filter((item) => item === 2020 - number1);
    if (number2) {
      return number1 * number2;
    }
  }
};

export const part2 = (input) => {
  const numbers = parseInput(input);
  for (let number1 of numbers) {
    for (let number2 of numbers) {
      for (let number3 of numbers) {
        if (number1 + number2 + number3 === 2020) {
          return number1 * number2 * number3;
        }
      }
    }
  }
};
