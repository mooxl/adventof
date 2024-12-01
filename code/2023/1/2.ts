const dict: Record<string, string> = {
  "one": "1",
  "two": "2",
  "three": "3",
  "four": "4",
  "five": "5",
  "six": "6",
  "seven": "7",
  "eight": "8",
  "nine": "9",
};

const regex = new RegExp(Object.keys(dict).join("|"), "g");

const file = Deno.readTextFileSync("./2023/1/input.txt").replace(
  regex,
  (match) => dict[match],
);

const result = file.split("\n").map((line) => line.split("")).map((line) =>
  line.find((char) => Number.isInteger(Number(char))) +
  line.reverse().find((char) => Number.isInteger(Number(char)))!
).reduce((acc, curr) => acc + Number(curr), 0);

console.log(result);
