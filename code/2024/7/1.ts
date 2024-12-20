import { getInput } from "../../../utils.ts";

const input = await getInput(import.meta.dirname);

const checkItRecursive = (
  value: number,
  result: number,
  operators: number[],
  isFirst: boolean = true,
): boolean => {
  if (operators.length === 0) {
    return value === result;
  }
  if (
    isFirst
  ) {
    return checkItRecursive(value, operators[0], operators.slice(1), false);
  }
  const add = checkItRecursive(
    value,
    result + operators[0],
    operators.slice(1),
    false,
  );
  const mult = checkItRecursive(
    value,
    result * operators[0],
    operators.slice(1),
    false,
  );
  return add || mult;
};
let sum = 0;
for (const line of input.split("\n")) {
  const [value, operators] = line.split(":");
  if (checkItRecursive(+value, 0, operators.split(" ").map(Number))) {
    sum += +value;
  }
}
console.log(sum);
