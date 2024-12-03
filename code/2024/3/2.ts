const input = await Deno.readTextFile(`${import.meta.dirname}/input.txt`);

const regex = /(?:mul\(\d+(?:\.\d+)?,\d+(?:\.\d+)?\)|do\(\)|don't\(\))/g;

let product = 0;
let enable = true;

for (const [match] of input.matchAll(regex)) {
  const [one, two] = match.replaceAll(/mul\(|\)/g, "").split(",");
  if (!one || !two) {
    enable = match === "do()";
    continue;
  }
  if (enable) {
    product = product + Number(one) * Number(two);
  }
}

console.log(product);
