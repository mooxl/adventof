const input = await Deno.readTextFile(`${import.meta.dirname}/input.txt`);

const lists: { left: number[]; right: number[] } = {
  left: [],
  right: [],
};

for (const line of input.split("\n")) {
  const [leftEntry, rightEntry] = line.split("   ").map(Number);
  lists.left.push(leftEntry);
  lists.right.push(rightEntry);
}

lists.left.sort();
lists.right.sort();

let differenceSum = 0;

for (const [index, value] of lists.left.entries()) {
  differenceSum = differenceSum + Math.abs(value - lists.right[index]);
}

console.log(differenceSum);
