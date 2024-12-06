import { getInput } from "../../../utils.ts";

// I could also create a map for each page with its valid previous and next links at the beginning to speed this up.

const input = await getInput(import.meta.dirname);

const lines: string[] = input.split("\n");
const separator = lines.findIndex((line) => line.length === 0);

const rules = lines.slice(0, separator).map((line) =>
  line.split("|").map(Number)
);
const updates = lines.slice(separator + 1).map((line) =>
  line.split(",").map(Number)
);

const incorrectUpdates = [];

for (const update of updates) {
  let correct = true;
  for (const [index, currentPage] of update.entries()) {
    const prevPage = update[index - 1];
    const nextPage = update[index + 1];
    if (!prevPage) {
      if (
        rules.some((rule) => currentPage === rule[0] && nextPage === rule[1])
      ) {
        continue;
      }
    } else if (!nextPage) {
      if (
        rules.some((rule) => prevPage === rule[0] && currentPage === rule[1])
      ) {
        continue;
      }
    } else if (
      rules.some((
        rule,
      ) => (prevPage === rule[0] && currentPage === rule[1])) &&
      rules.some((rule) => currentPage === rule[0] && nextPage === rule[1])
    ) {
      continue;
    }
    correct = false;
    break;
  }
  if (!correct) {
    incorrectUpdates.push(update);
  }
}

let count = 0;

const sortIt = (update: number[]): number[] => {
  if (update.length <= 1) {
    return update;
  }
  for (const [index, currentPage] of update.entries()) {
    const remainingPages = [
      ...update.slice(0, index),
      ...update.slice(index + 1),
    ];
    if (
      remainingPages.every((
        remainingPage,
      ) =>
        rules.some((rule) =>
          rule[0] === currentPage && rule[1] === remainingPage
        )
      )
    ) {
      return [currentPage, ...sortIt(remainingPages)];
    }
  }
  throw new Error("");
};

for (const incorrectUpdate of incorrectUpdates) {
  const sorted = sortIt(incorrectUpdate);
  count = count + sorted[(sorted.length - 1) / 2];
}

console.log(count);
