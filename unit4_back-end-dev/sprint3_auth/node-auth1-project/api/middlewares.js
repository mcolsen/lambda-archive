const { findUsername } = require("./db");

const validateRegistration = (req, res, next) => {
	if (req.body.username && req.body.password) {
		req.credentials = {
			username: req.body.username,
			password: req.body.password,
		};
		next();
	} else {
		res
			.status(500)
			.json({ message: "username and password fields are required" });
	}
};

const validateLogin = (req, res, next) => {
	if (req.body.username && req.body.password) {
		findUsername(req.body.username)
			.then((r) => {
				req.hash = r[0].password;
				req.userId = r[0].id;
				req.credentials = {
					username: req.body.username,
					password: req.body.password,
				};
				next();
			})
			.catch((e) => res.status(500).json(e));
	} else {
		res
			.status(500)
			.json({ message: "username and password fields are required" });
	}
};

const verifySession = (req, res, next) => {
	if (req.session.user) {
		next();
	} else {
		res.status(401).end();
	}
};

module.exports = { validateRegistration, validateLogin, verifySession };
