const input = Deno.readTextFileSync(`${import.meta.dirname}/input.txt`);

const neededPaper = input.split("\n").reduce((prev, cur) => {
  const dimensions = cur.split("x");
  const sides: Array<number> = [
    Number(dimensions[0]) * Number(dimensions[1]),
    Number(dimensions[1]) * Number(dimensions[2]),
    Number(dimensions[2]) * Number(dimensions[0]),
  ];
  const paper = sides.reduce((prev, cur) => prev + 2 * cur, 0);
  console.log(dimensions, sides, paper, Math.min(...sides));
  return prev + Math.min(...sides) + paper;
}, 0);

console.log(neededPaper);
