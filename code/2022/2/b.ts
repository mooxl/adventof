const input = Deno.readTextFileSync(`${import.meta.dirname}/input.txt`);

const possibilities = new Map([
  ["A,X", 3],
  ["A,Y", 4],
  ["A,Z", 8],
  ["B,X", 1],
  ["B,Y", 5],
  ["B,Z", 9],
  ["C,X", 2],
  ["C,Y", 6],
  ["C,Z", 7],
]);

console.log(
  input
    .split("\n")
    .reduce(
      (prev, cur) => prev + possibilities.get(cur.split(" ").toString())!,
      0,
    ),
);
