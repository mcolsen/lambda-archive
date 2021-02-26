const logger = (req, res, next) => {
	console.log(
		`\n${new Date()}\nRequest method: ${req.method}\nRequest url: ${req.url}`
	);
	next();
};

const validateUserId = (req, res, next) => {
	if (req.params.id) {
		const { getById } = require("./users/userDb");
		getById(req.params.id)
			.then((r) => {
				if (r) {
					req.user = r;
					next();
				} else {
					res.status(404).json({ message: "user not found" });
				}
			})
			.catch(() => {
				res.status(500).json({ message: "failed to retrieve user" });
			});
	} else {
		res.status(400).json({ message: "user ID missing" });
	}
};

const validateUser = (req, res, next) => {
	if (Object.keys(req.body).length >= 1) {
		if (req.body.name) {
			next();
		} else {
			res.status(400).json({ message: "name field is required" });
		}
	} else {
		res.status(400).json({ message: "user data missing" });
	}
};

const validatePost = (req, res, next) => {
	if (Object.keys(req.body).length >= 1) {
		if (req.body.text) {
			next();
		} else {
			res.status(400).json({ message: "text field is required" });
		}
	} else {
		res.status(400).json({ message: "post data missing" });
	}
};

module.exports = { logger, validateUserId, validateUser, validatePost };
