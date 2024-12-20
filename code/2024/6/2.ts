import { getInput } from "../../../utils.ts";

const input = await getInput(import.meta.dirname);

const directions = {
  "^": { x: 0, y: -1, next: ">" },
  ">": { x: 1, y: 0, next: "v" },
  "v": { x: 0, y: 1, next: "<" },
  "<": { x: -1, y: 0, next: "^" },
} as const;

let guard: {
  x: number;
  y: number;
  direction: keyof typeof directions;
} | undefined;

const pattern = /[>v<^]/g;

const matrix = input.split("\n").map((line, y) => {
  const match = [...line.matchAll(pattern)];
  if (match.length) {
    guard = {
      x: match[0].index,
      y,
      direction: match[0][0] as keyof typeof directions,
    };
  }
  return line.split("");
});

if (guard === undefined) {
  throw new Error("Guard not found!");
}
let count = 0;
for (const [y, line] of matrix.entries()) {
  for (const [x] of line.entries()) {
    if (y === guard.y && x === guard.x) {
      continue;
    }
    const newGuard = structuredClone(guard);
    const newMatrix = matrix;
    newMatrix[y][x] = "O";
    let iteration = 0;
    while (iteration <= 1000000) {
      if (iteration === 1000000) {
        count++;
        break;
      }
      const direction = directions[newGuard.direction];
      const nextX = newGuard.x + direction.x;
      const nextY = newGuard.y + direction.y;
      if (
        nextY < 0 || nextY >= matrix.length || nextX < 0 ||
        nextX >= matrix[nextY].length
      ) {
        break;
      }
      const nextMove = newMatrix[nextY][nextX];
      if (nextMove === "#" || nextMove == "O") {
        newGuard.direction = direction.next;
        iteration++;
        continue;
      }
      newGuard.y = nextY;
      newGuard.x = nextX;
      iteration++;
    }
  }
}

console.log(count);
