export const getInput = async (path?: string) => {
  if (!path) {
    throw new Error();
  }

  return await Deno.readTextFile(`${path}/input.txt`);
};
