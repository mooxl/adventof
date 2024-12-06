export const getInput = async (path: string | undefined, sample?: string) => {
  if (!path) {
    throw new Error();
  }

  return await Deno.readTextFile(`${path}/${sample ?? "input"}.txt`);
};
