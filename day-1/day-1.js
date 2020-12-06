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
