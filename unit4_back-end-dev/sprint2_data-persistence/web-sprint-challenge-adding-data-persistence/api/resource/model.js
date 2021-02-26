const db = require("../../data/dbConfig");

const getResources = () => {
	return db("resources");
};

const addResource = (resource) => {
	return db("resources")
		.insert(resource)
		.then((r) => {
			return db("resources")
				.where("id", r[0])
				.then((r) => r[0]);
		});
};

module.exports = { getResources, addResource };
