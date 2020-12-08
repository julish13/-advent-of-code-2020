const parseInput = (input) =>
  input.split(`\n\n`).map((group) => group.split(`\n`));

export const part1 = (input) => {
  const groups = parseInput(input);
  let answersCount = 0;
  for (const group of groups) {
    const groupAnswers = [...new Set(group.join(``).split(``))].length;
    answersCount += groupAnswers;
  }

  return answersCount;
};

export const part2 = (input) => {
  const groups = parseInput(input);
  let totalAnswersCount = 0;
  for (const group of groups) {
    let groupAnswersCount = 0;

    const groupAnswers = group.join(``).split(``);
    const groupOptions = [...new Set(groupAnswers)];

    for (const option of groupOptions) {
      if (
        groupAnswers.filter((answer) => answer === option).length ===
        group.length
      ) {
        groupAnswersCount++;
      }
    }

    totalAnswersCount += groupAnswersCount;
  }

  return totalAnswersCount;
};
