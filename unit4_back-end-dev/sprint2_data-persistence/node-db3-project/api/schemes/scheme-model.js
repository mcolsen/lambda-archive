// scheme-model

const db = require("../../data/db-config");

const find = () => {
	return db("schemes");
};
const findById = (id) => {
	return db("schemes")
		.where("id", id)
		.then((r) => r[0])
		.catch((e) => e);
};
const findSteps = (id) => {
	return db("schemes")
		.join("steps", "steps.scheme_id", "schemes.id")
		.select(
			"steps.id",
			"schemes.scheme_name",
			"steps.step_number",
			"steps.instructions"
		)
		.where("steps.scheme_id", id)
		.orderBy("steps.step_number");
};

const add = (scheme) => {
	return db("schemes")
		.insert(scheme)
		.then((r) => {
			return db("schemes")
				.where("id", r[0])
				.then((r) => r[0])
				.catch((e) => e);
		})
		.catch((e) => e);
};
const update = (changes, id) => {
	return db("schemes")
		.where("id", id)
		.update(changes)
		.then(() => {
			return db("schemes")
				.where("id", id)
				.then((r) => r[0])
				.catch((e) => e);
		})
		.catch((e) => e);
};
const remove = (id) => {
	return db("schemes")
		.where("id", id)
		.then((scheme) => {
			return db("schemes")
				.where("id", id)
				.del()
				.then(() => scheme[0])
				.catch((e) => e);
		})
		.catch((e) => e);
};

module.exports = {
	find,
	findById,
	findSteps,
	add,
	update,
	remove,
};
