const parseInput = (input) => input.split(`\n`);

export const part1 = (input) => {
  const data = parseInput(input);
  const stringLength = data[0].length;

  let countTrees = 0;
  let breakpoint = 3;

  for (let i = 1; i < data.length; i++) {
    if (data[i][breakpoint] === `#`) {
      countTrees++;
    }
    breakpoint += 3;
    if (breakpoint >= stringLength) {
      breakpoint -= stringLength;
    }
  }

  return countTrees;
};

export const part2 = (input) => {
  const data = parseInput(input);

  const countTrees = (rightSteps, downSteps) => {
    const stringLength = data[0].length;

    let countTrees = 0;
    let breakpoint = rightSteps;

    for (let i = downSteps; i < data.length; i += downSteps) {
      if (data[i][breakpoint] === `#`) {
        countTrees++;
      }
      breakpoint += rightSteps;
      if (breakpoint >= stringLength) {
        breakpoint -= stringLength;
      }
    }
    return countTrees;
  };

  return (
    countTrees(1, 1) *
    countTrees(3, 1) *
    countTrees(5, 1) *
    countTrees(7, 1) *
    countTrees(1, 2)
  );
};
