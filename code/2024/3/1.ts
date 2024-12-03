const input = await Deno.readTextFile(`${import.meta.dirname}/input.txt`);

const regex = /mul\(\d+(?:\.\d+)?,\d+(?:\.\d+)?\)/g;

let product = 0;

for (const [match] of input.matchAll(regex)) {
  const [one, two] = match.replaceAll(/mul\(|\)/g, "").split(",").map(Number);
  product = product + one * two;
}

console.log(product);
