import { getInput } from "../../../utils.ts";

const input = await getInput(import.meta.dirname);

const lines: string[][] = input.split("\n").map((line) => line.split(""));

let count = 0;

for (const [indexLine, currentLine] of lines.entries()) {
  for (const [indexLetter, currentLetter] of currentLine.entries()) {
    if (currentLetter !== "A") continue;
    if (
      !lines[indexLine - 1] || !lines[indexLine + 1]
    ) {
      continue;
    }
    const x = [
      lines[indexLine - 1][indexLetter - 1],
      lines[indexLine - 1][indexLetter + 1],
      lines[indexLine + 1][indexLetter + 1],
      lines[indexLine + 1][indexLetter - 1],
    ];
    if (
      x.filter((char) => char === "M").length !== 2 ||
      x.filter((char) => char === "S").length !== 2
    ) {
      continue;
    }
    if (x[0] !== x[2]) {
      count++;
    }
  }
}

console.log(count);
