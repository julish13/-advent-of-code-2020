const ROWS_COUNT = 128;
const COLUMNS_COUNT = 8;
const ROW_CHARACTERS_COUNT = 7;

const parseInput = (input) =>
  input
    .split(`\n`)
    .map((seat) => [
      seat.slice(0, ROW_CHARACTERS_COUNT).split(``),
      seat.slice(ROW_CHARACTERS_COUNT).split(``),
    ]);

const getSeatId = (seat) => {
  let row = Array.from(Array(ROWS_COUNT).keys());
  let column = Array.from(Array(COLUMNS_COUNT).keys());

  for (const character of seat[0]) {
    if (character === `F`) {
      row = row.slice(0, row.length / 2);
    } else {
      row = row.slice(row.length / 2);
    }
  }

  for (const character of seat[1]) {
    if (character === `L`) {
      column = column.slice(0, column.length / 2);
    } else {
      column = column.slice(column.length / 2);
    }
  }

  return Number(row) * 8 + Number(column);
};

export const part1 = (input) => {
  const seats = parseInput(input);
  let max = 0;

  for (const seat of seats) {
    const seatId = getSeatId(seat);
    max = seatId > max ? seatId : max;
  }

  return max;
};

export const part2 = (input) => {
  const seats = parseInput(input);

  const seatIds = seats.map((seat) => getSeatId(seat));
  for (const preSeatId of seatIds) {
    const seatId = preSeatId + 1;
    const postSeatId = preSeatId + 2;
    if (seatIds.includes(postSeatId) && !seatIds.includes(seatId)) {
      return seatId;
    }
  }
};
