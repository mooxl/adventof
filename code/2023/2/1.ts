const file = Deno.readTextFileSync(`${import.meta.dirname}/input.txt`);

const games: { red: number; green: number; blue: number }[][] = [];
const max = { red: 12, green: 13, blue: 14 };

for (const [index1, line] of file.split("\n").entries()) {
  const [_, rounds] = line.split(":");
  if (!games[index1]) {
    games[index1] = [];
  }
  for (const [index2, round] of rounds.split(";").entries()) {
    const draws = round.split(",");
    const obj = { red: 0, green: 0, blue: 0 };
    for (const draw of draws) {
      const [countStr, color] = draw.trim().split(" ");
      const count = Number.parseInt(countStr);
      if (color in obj) {
        obj[color as "red" | "green" | "blue"] = count;
      }
    }
    games[index1][index2] = obj;
  }
}

let sum = 0;

loop: for (const [i, game] of games.entries()) {
  for (const round of game) {
    for (const [key] of Object.entries(round)) {
      if (
        round[key as "red" | "green" | "blue"] >
          max[key as "red" | "green" | "blue"]
      ) {
        continue loop;
      }
    }
  }
  sum = sum + i + 1;
}

console.log(sum);
