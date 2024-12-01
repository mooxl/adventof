const input = Deno.readTextFileSync(`${import.meta.dirname}/input.txt`);
const possibilities = new Map([
  ["A,X", 4],
  ["A,Y", 8],
  ["A,Z", 3],
  ["B,X", 1],
  ["B,Y", 5],
  ["B,Z", 9],
  ["C,X", 7],
  ["C,Y", 2],
  ["C,Z", 6],
]);
console.log(
  input
    .split("\n")
    .reduce(
      (prev, cur) => prev + possibilities.get(cur.split(" ").toString())!,
      0,
    ),
);
