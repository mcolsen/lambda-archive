const express = require("express");
const bcrypt = require("bcryptjs");
const {
	validateRegistration,
	validateLogin,
	verifySession,
} = require("./middlewares");
const { addUser, getUser, getAllUsers } = require("./db");

const router = express.Router();

router.post("/register", validateRegistration, (req, res) => {
	const credentials = req.credentials;
	credentials.password = bcrypt.hashSync(credentials.password);
	addUser(credentials)
		.then((r) => {
			getUser(r[0])
				.then((user) => res.status(201).json(user[0]))
				.catch((e) => res.status(500).json(e));
		})
		.catch((e) => res.status(500).json(e));
});

router.post("/login", validateLogin, (req, res) => {
	if (bcrypt.compareSync(req.credentials.password, req.hash)) {
		req.session.user = {
			id: req.userId,
			username: req.credentials.username,
		};
		res.status(200).end();
	} else {
		res.status(401).json({ message: "Invalid credentials" });
	}
});

router.get("/users", verifySession, (req, res) => {
	getAllUsers()
		.then((r) => res.status(200).json(r))
		.catch((e) => res.status(500).json(e));
});

module.exports = router;
