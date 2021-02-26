const express = require("express");
const bcrypt = require("bcryptjs");
const { validReg, validLogin, newToken } = require("./helpers");
const { addUser, getUser, getAllUsers } = require("./db");
const { auth } = require("./middleware");

const rounds = process.env.BCRYPT_ROUNDS || 8;

const router = express.Router();

router.post("/register", (req, res) => {
	const credentials = validReg(req.body);

	if (credentials) {
		credentials.password = bcrypt.hashSync(credentials.password, rounds);

		addUser(credentials)
			.then((user) => res.status(201).json(user))
			.catch((e) => res.status(500).json(e));
	} else {
		res.status(400).end();
	}
});

router.post("/login", (req, res) => {
	const credentials = validLogin(req.body);

	if (credentials) {
		getUser(credentials.username).then((user) => {
			if (user && bcrypt.compareSync(credentials.password, user.password)) {
				const token = newToken(user);
				res.status(200).json({ message: `Welcome ${user.username}`, token });
			} else {
				res.status(401).json("Invalid credentials");
			}
		});
	} else {
		res.status(400).end();
	}
});

router.get("/users", auth, (req, res) => {
	getAllUsers()
		.then((r) => res.status(200).json(r))
		.catch((e) => res.status(500).json(e));
});

module.exports = router;
