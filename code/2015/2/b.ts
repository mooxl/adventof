const input = Deno.readTextFileSync(`${import.meta.dirname}/input.txt`);
const neededRibbon = input.split("\n").reduce((prev, cur) => {
  let found = false;
  const dimensions = cur.split("x").map((side) => Number(side));
  console.log(dimensions);
  const volume = dimensions.reduce((prev, cur) => prev * cur);
  const ribbon = dimensions
    .filter((dimension) => {
      if (dimension !== Math.max(...dimensions) || found) {
        return dimension;
      }
      found = true;
    })
    .map((side) => side * 2)
    .reduce((prev, cur) => prev + cur);
  return prev + volume + ribbon;
}, 0);

console.log(neededRibbon);
