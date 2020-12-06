const parseInput = (input) =>
  input
    .split(`\n\n`)
    .map((item) => item.split(/\s+/))
    .map((item) => item.map((str) => str.split(`:`)))
    .map((item) => Object.fromEntries(item));

const getValidPassports = (input) => {
  const data = parseInput(input);
  return data.filter((item) => {
    delete item.cid;
    return Object.keys(item).length === 7;
  });
};

export const part1 = (input) => {
  return getValidPassports(input).length;
};

export const part2 = (input) => {
  const data = getValidPassports(input);

  const validPassports = data.filter(
    ({ byr, iyr, eyr, hgt, hcl, ecl, pid }) => {
      const byrValid = byr && Number(byr) >= 1920 && Number(byr) <= 2002;
      const iyrValid = iyr && Number(iyr) >= 2010 && Number(iyr) <= 2020;
      const eyrValid = eyr && Number(eyr) >= 2020 && Number(eyr) <= 2030;

      const hgtValue = Number(hgt.match(/^[\d]+/));
      const hgtUnit = String(hgt.match(/[a-z]+$/));
      const hgtValid =
        hgt &&
        ((hgtValue >= 150 && hgtValue <= 193 && hgtUnit === `cm`) ||
          (hgtValue >= 59 && hgtValue <= 76 && hgtUnit === `in`));

      const hclValid = hcl && /^#[a-f0-9]+$/.test(hcl) && hcl.length === 7;

      const eclValid =
        ecl &&
        (ecl === `amb` ||
          ecl === `blu` ||
          ecl === `brn` ||
          ecl === `gry` ||
          ecl === `grn` ||
          ecl === `hzl` ||
          ecl === `oth`);

      const pidValid = pid && /^[0-9]+$/.test(pid) && pid.length === 9;

      return (
        byrValid &&
        iyrValid &&
        eyrValid &&
        hgtValid &&
        hclValid &&
        eclValid &&
        pidValid
      );
    }
  );

  return validPassports.length;
};
