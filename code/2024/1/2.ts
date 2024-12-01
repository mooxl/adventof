const input = await Deno.readTextFile(`${import.meta.dirname}/input.txt`);

const lists: { left: number[]; right: number[] } = {
  left: [],
  right: [],
};

for (const line of input.split("\n")) {
  const [leftEntry, rightEntry] = line.split("   ").map(Number);
  lists.left.push(leftEntry);
  const rightItem = lists.right[rightEntry];
  if (rightItem !== undefined) {
    lists.right[rightEntry]++;
    continue;
  }
  lists.right[rightEntry] = 1;
}

lists.left.sort();

let score = 0;

for (const leftValue of lists.left) {
  const rightValue = lists.right[leftValue];
  if (!rightValue) continue;
  score = score + leftValue * rightValue;
}

console.log(score);
