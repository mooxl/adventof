/*
Upon approaching a snowy hill, the Yeti discovers a playful snowball contest about
to begin. To light the lantern and start the game, sorting a pile of snowballs
by size using some code is necessary. However, running the code results in the
snowballs getting mixed up instead of neatly ordered — the sorting function
isn't working as expected, and a quick fix is needed to keep the fun going!
*/

function sortSnowballs(sizes) {
	return sizes.sort((a,b)=>a-b);
}

console.log(sortSnowballs([
    10,
    9,
    8,
    3,
    2,
    1,
    0
]))