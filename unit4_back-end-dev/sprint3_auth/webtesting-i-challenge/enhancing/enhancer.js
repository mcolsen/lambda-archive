module.exports = {
	success,
	fail,
	repair,
	get,
};

function success(item) {
	if (item.enhancement < 20) {
		return { ...item, enhancement: item.enhancement + 1 };
	} else {
		return { ...item };
	}
}

function fail(item) {
	if (item.enhancement < 15) {
		return { ...item, durability: item.durability - 5 };
	} else {
		const failed = { ...item, durability: item.durability - 10 };
		if (item.enhancement > 16) {
			failed.enhancement--;
		}
		return failed;
	}
}

function repair(item) {
	return { ...item, durability: 100 };
}

function get(item) {
	return { ...item };
}
