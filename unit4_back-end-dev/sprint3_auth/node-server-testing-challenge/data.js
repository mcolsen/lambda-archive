let bunnies = [];

const scrubBunnies = () => bunnies.splice(0);
const addBunny = (bun) => bunnies.push(bun);
const getNewestBunny = () => bunnies[bunnies.length - 1];
const getBunniesLength = () => bunnies.length;
const deleteBunny = (index) => bunnies.splice(index, 1);

module.exports = {
	bunnies,
	scrubBunnies,
	addBunny,
	getNewestBunny,
	getBunniesLength,
	deleteBunny,
};
