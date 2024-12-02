const input = await Deno.readTextFile(`${import.meta.dirname}/input.txt`);

let safeReports = 0;

for (const line of input.split("\n")) {
  let increasing: boolean | undefined = undefined;
  let safe = true;
  const levels = line.split(" ").map(Number);
  for (const [index, level] of levels.entries()) {
    const nextLevel = levels[index + 1];
    if (nextLevel === undefined) {
      break;
    }
    if (increasing === undefined) {
      increasing = level < nextLevel;
    }
    if (
      increasing && level > nextLevel || !increasing && level < nextLevel ||
      Math.abs(level - nextLevel) > 3 || Math.abs(level - nextLevel) < 1
    ) {
      safe = false;
      break;
    }
  }
  if (safe) {
    safeReports++;
  }
}

console.log(safeReports);
