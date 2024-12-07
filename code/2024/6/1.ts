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

let count = 1;

while (guard !== undefined) {
  const direction = directions[guard.direction];
  const nextX = guard.x + direction.x;
  const nextY = guard.y + direction.y;
  const nextMove = matrix[nextY][nextX];
  if (nextMove === "#") {
    guard.direction = direction.next;
    continue;
  }
  if (nextMove === undefined) {
    guard = undefined;
    continue;
  }
  matrix[guard.y][guard.x] = "X";
  guard.y = nextY;
  guard.x = nextX;
}

for (const line of matrix) {
  for (const char of line) {
    if (char === "X") {
      count++;
    }
  }
}

console.log(matrix[79][87]);

console.log(count);
