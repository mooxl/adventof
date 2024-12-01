const input = Deno.readTextFileSync(`${import.meta.dirname}/input.txt`);
const max = [0, 0, 0];
input.split("\n\n").forEach((elf) => {
  const min = Math.min(...max);
  const calories = elf
    .split("\n")
    .reduce((prev, cur) => Number(prev) + Number(cur), 0);
  if (min < calories) max[max.indexOf(min)] = calories;
});
console.log(max.reduce((prev, cur) => prev + cur));
