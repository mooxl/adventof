const input = Deno.readTextFileSync(`${import.meta.dirname}/input.txt`);
let bottom = 0;
input.split("").reduce((prev, cur, i) => {
  if (cur === "(") prev = prev + 1;
  else prev = prev - 1;
  if (prev < 0 && bottom === 0) {
    bottom = i + 1;
  }
  return prev;
}, 0);
console.log(bottom);
