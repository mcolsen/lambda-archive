const db = require("../data/connection");

const addUser = (cred) => {
	return db("users")
		.insert(cred)
		.then((r) => getUserById(r[0]));
};

const getUserById = (id) => {
	return db("users")
		.select("id", "username", "department")
		.where("id", id)
		.then((r) => r[0]);
};

const getUser = (username) => {
	return db("users")
		.where("username", username)
		.then((r) => r[0]);
};

const getAllUsers = () => {
	return db("users").select("id", "username", "department");
};

module.exports = { addUser, getUser, getAllUsers };
