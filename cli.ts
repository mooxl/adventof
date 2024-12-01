import { cancel, isCancel, select } from "@clack/prompts";

type GetDirParams = { challenge: string; year?: string; day?: string };

const getDir = (
  { challenge, year, day }: GetDirParams,
) => {
  const pathSegments = [
    ".",
    challenge,
    ...(year ? [year] : []),
    ...(day ? [day] : []),
  ];
  const dirPath = pathSegments.join("/");
  try {
    const results = Array.from(Deno.readDirSync(dirPath))
      .map((entry) => entry.name);
    return {
      results,
      error: null,
    };
  } catch (error) {
    return {
      results: [],
      error: error instanceof Error ? error.message : "Unknown error occurred",
    };
  }
};

const challenge = await select({
  message: "Advent of",
  options: [{ value: "code", label: "Code" }, {
    value: "types",
    label: "Types",
  }, {
    value: "debug",
    label: "Debug",
  }],
});
if (isCancel(challenge)) {
  cancel("Operation cancelled.");
  Deno.exit();
}

const { results: years, error: yearsError } = getDir({ challenge });
if (yearsError !== null) Deno.exit();

const year = await select({
  message: "Which year?",
  options: years.map((year) => ({ value: year, label: year })),
});
if (isCancel(year)) {
  cancel("Operation cancelled.");
  Deno.exit();
}

const { results: days, error: daysError } = getDir({ challenge, year });
if (daysError !== null) Deno.exit();

const day = await select({
  message: "Advent of",
  options: days.map((day) => ({ value: day, label: day })),
});
if (isCancel(day)) {
  cancel("Operation cancelled.");
  Deno.exit();
}

const { results: parts, error: partsError } = getDir({ challenge, year, day });
if (partsError !== null) Deno.exit();
const part = await select({
  message: "Which part?",
  options: parts.filter((part) => part.endsWith(".ts")).map((part) => ({
    value: part,
    label: part,
  })),
});
if (isCancel(part)) {
  cancel("Operation cancelled.");
  Deno.exit();
}

const command = new Deno.Command(Deno.execPath(), {
  args: [
    "task",
    "run",
    `./${challenge}/${year}/${day}/${part}`,
  ],
  stdin: "piped",
  stdout: "piped",
});
const child = command.spawn();

// open a file and pipe the subprocess output to it.
child.stdout.pipeTo(Deno.stdout.writable);

// manually close stdin
child.stdin.close();
