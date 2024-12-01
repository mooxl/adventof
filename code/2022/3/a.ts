const input = Deno.readTextFileSync(`${import.meta.dirname}/input.txt`).split(
  "\n",
);
const rucksacks = input.map((line) => [
  line.substring(0, Math.floor(line.length / 2)),
  line.substring(Math.floor(line.length / 2)),
]);
const duplicate = rucksacks.map((compartments) => {
  let push = true;
  return compartments[0].split("").filter((item) => {
    if (push && compartments[1].includes(item)) {
      push = false;
      return item;
    }
  })[0];
});
console.log(
  duplicate.reduce((prev, cur) => {
    const asciicode = cur.charCodeAt(0);
    if (asciicode < 97) prev += asciicode - 38;
    else prev += asciicode - 96;
    return prev;
  }, 0),
);
