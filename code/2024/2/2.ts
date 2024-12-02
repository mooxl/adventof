const input = await Deno.readTextFile(`${import.meta.dirname}/input.txt`);

const isValid = (levels: number[]) => {
  let increasing = true;
  for (const index of levels.keys()) {
    const diff = levels[index + 1] - levels[index];
    if (diff < 1 || diff > 3) {
      increasing = false;
      break;
    }
  }
  if (increasing) {
    return true;
  }
  let decreasing = true;
  for (const index of levels.keys()) {
    const diff = levels[index] - levels[index + 1];
    if (diff < 1 || diff > 3) {
      decreasing = false;
      break;
    }
  }
  return decreasing;
};

let safeReports = 0;

for (const line of input.split("\n")) {
  const levels = line.split(" ").map(Number);
  if (isValid(levels)) {
    safeReports++;
    continue;
  }
  for (const index of levels.keys()) {
    const newLevels = [...levels.slice(0, index), ...levels.slice(index + 1)];
    if (isValid(newLevels)) {
      safeReports++;
      break;
    }
  }
}

console.log(safeReports);
