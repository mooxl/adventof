import { getInput } from "../../../utils.ts";

const input = await getInput(import.meta.dirname);

const lines: string[][] = input.split("\n").map((line) => line.split(""));

let count = 0;

const checkXMAS = (lineDirection: number[], letterDirection: number[]) => {
  for (const [index, look] of ["M", "A", "S"].entries()) {
    if (lines[lineDirection[index]] === undefined) return false;
    if (
      look !== lines[lineDirection[index]][letterDirection[index]]
    ) {
      return false;
    }
  }
  return true;
};

const directions = [
  [[-1, -2, -3], [0, 0, 0]], // up
  [[-1, -2, -3], [1, 2, 3]], // up-right
  [[0, 0, 0], [1, 2, 3]], // right
  [[1, 2, 3], [1, 2, 3]], // down-right
  [[1, 2, 3], [0, 0, 0]], // down
  [[1, 2, 3], [-1, -2, -3]], // down-left
  [[0, 0, 0], [-1, -2, -3]], // left
  [[-1, -2, -3], [-1, -2, -3]], // up-left
];

for (const [indexLine, line] of lines.entries()) {
  for (const [indexLetter, letter] of line.entries()) {
    if (letter !== "X") continue;
    for (const [lineInc, letterInc] of directions) {
      if (
        checkXMAS(
          lineInc.map((inc) => indexLine + inc),
          letterInc.map((inc) => indexLetter + inc),
        )
      ) {
        count++;
      }
    }
  }
}

console.log(count);
