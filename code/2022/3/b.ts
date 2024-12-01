const input = Deno.readTextFileSync(`${import.meta.dirname}/input.txt`).split(
  "\n",
);
const groups: string[][] = [];
input.forEach((_, index) => {
  if (index && (index + 1) % 3 === 0) {
    groups.push([input[index - 2], input[index - 1], input[index]]);
  }
});
const badges: string[] = [];
groups.forEach((group) => {
  let push = true;
  group[0].split("").forEach((char) => {
    if (push && group[1].includes(char) && group[2].includes(char)) {
      badges.push(char);
      push = false;
    }
    return false;
  });
});
console.log(badges);
console.log(
  badges.reduce((prev, cur) => {
    const asciicode = cur.charCodeAt(0);
    if (asciicode < 97) prev += asciicode - 38;
    else prev += asciicode - 96;
    return prev;
  }, 0),
);
