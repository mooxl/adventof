/*
The Yeti is on the way home to family, but the lights along the path are all
broken due to coding bugs. To fix them, a series of JavaScript challenges need
to be solved. The first light won't turn on until two ingredients are correctly
combined for the Elixir of Eternal Snow, ensuring both are properly capitalized
and joined with a dash.
*/

const brewPotion = (ingredient1, ingredient2) => {
  // Ensure both ingredients are provided
  if (!ingredient1 || !ingredient2) {
    throw new Error("Both ingredients are required.");
  }

  console.log("ingredient1", ingredient1);
  console.log("ingredient2", ingredient2);

  // Combine the ingredients with a dash and capitalize them correctly
  return ingredient1.charAt(0).toUpperCase() +
    ingredient1.slice(1).toLowerCase() +
    "-" +
    ingredient2.charAt(0).toUpperCase() + ingredient2.slice(1).toLowerCase();
};

console.log(brewPotion("foo", "bar"));
