const db = require("../database/connection");

const addUser = (credentials) => {
	return db("users").insert(credentials);
};

const getUser = (id) => {
	return db("users").select("id", "username").where("id", id);
};

const findUsername = (username) => {
	return db("users").where("username", username);
};

const getAllUsers = () => {
	return db("users").select("id", "username");
};

module.exports = { addUser, getUser, findUsername, getAllUsers };
