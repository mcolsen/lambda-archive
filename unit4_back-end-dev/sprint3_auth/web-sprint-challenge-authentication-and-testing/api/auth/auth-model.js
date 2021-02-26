const db = require("../../data/dbConfig");

const addUser = (user) => {
	return db("users")
		.insert(user)
		.then((r) =>
			db("users")
				.where("id", r[0])
				.then((r) => r[0])
		);
};

const findByUsername = (username) => {
	return db("users").where("username", username);
};

module.exports = { addUser, findByUsername };
