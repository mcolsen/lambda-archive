const express = require("express");
const shortid = require("shortid");

const server = express();
server.use(express.json());

const BASE_URL = "/api/users";
let users = [];

//	Helper functions
const Users = {
	getAll() {
		return users;
	},
	get(id) {
		return users.find((user) => user.id === id);
	},
	add(user) {
		const newUser = { id: shortid.generate(), ...user };
		users.push(newUser);
		return newUser;
	},
	delete(id) {
		const user = users.find((user) => user.id === id);
		if (user) {
			users = users.filter((u) => u.id !== id);
		}
		return user;
	},
	update(id, changes) {
		const user = users.find((user) => user.id === id);
		if (!user) {
			return null;
		}
		const updatedUser = { id: id, ...changes };
		users = users.map((u) => {
			if (u.id === id) {
				return updatedUser;
			}
			return u;
		});
		return updatedUser;
	},
	validate(user) {
		if (
			user.name &&
			user.bio &&
			typeof user.name === "string" &&
			typeof user.bio === "string"
		) {
			return true;
		} else {
			return false;
		}
	},
};

//	Endpoints
server.post(BASE_URL, (req, res) => {
	const reqUser = req.body;

	if (Users.validate(reqUser)) {
		const newUser = Users.add(reqUser);
		res.status(201).json(newUser);
	} else {
		res
			.status(400)
			.json({ errorMessage: "Please provide name and bio for the user." });
	}
});

server.get(BASE_URL, (req, res) => {
	const allUsers = Users.getAll();
	res.status(200).json(allUsers);
});

server.get(`${BASE_URL}/:id`, (req, res) => {
	const { id } = req.params;
	const user = Users.get(id);
	if (user) {
		res.status(200).json(user);
	} else {
		res
			.status(404)
			.json({ message: "The user with the specified ID does not exist." });
	}
});

server.delete(`${BASE_URL}/:id`, (req, res) => {
	const { id } = req.params;
	const deleted = Users.delete(id);
	if (deleted) {
		res.status(200).json(deleted);
	} else {
		res
			.status(404)
			.json({ message: "The user with the specified ID does not exist." });
	}
});

server.put(`${BASE_URL}/:id`, (req, res) => {
	const changes = req.body;
	const { id } = req.params;
	if (Users.validate(changes)) {
		const updated = Users.update(id, changes);
		if (updated) {
			res.status(200).json(updated);
		} else {
			res
				.status(404)
				.json({ message: "The user with the specified ID does not exist." });
		}
	} else {
		res
			.status(400)
			.json({ errorMessage: "Please provide name and bio for the user." });
	}
});

server.use("*", (req, res) => {
	res.status(404).json({ message: "Not found" });
});

//	Start server on port 5000
server.listen(5000, () => {
	console.log("listening on port 5000");
});
