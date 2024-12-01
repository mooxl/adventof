const input = Deno.readTextFileSync(`${import.meta.dirname}/input.txt`).split(
  "\n",
);
const pairs = input.map((pairs) =>
  pairs.split(",").map((pair) => pair.split("-").map((group) => Number(group)))
);
const contained = pairs.filter(
  (pair) =>
    (pair[0][0] >= pair[1][0] && pair[0][1] <= pair[1][1]) ||
    (pair[1][0] >= pair[0][0] && pair[1][1] <= pair[0][1]),
);
console.log(contained.length);
