const input = Deno.readTextFileSync(`${import.meta.dirname}/input.txt`);

const houses: number[][] = [[]];

let x = 1000;
let y = 1000;

input.split("").forEach((move, i) => {
  if (i === 0) houses[0][0] = 1;
  switch (move) {
    case "^": {
      y++;
      break;
    }
    case ">": {
      x++;
      break;
    }
    case "v": {
      y--;
      break;
    }
    case "<": {
      x--;
      break;
    }
  }
  if (houses[x] === undefined) houses[x] = [];
  if (houses[x][y] === undefined) houses[x][y] = 0;
  houses[x][y]++;
});
const lucky = houses.reduce(
  (prev, cur) => prev + cur.filter((thi) => typeof thi === "number").length,
  0,
);

console.log(lucky);
