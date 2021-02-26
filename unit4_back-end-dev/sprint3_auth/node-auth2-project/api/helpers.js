const jwt = require("jsonwebtoken");

const validReg = (body) => {
	if (
		body.username &&
		body.password &&
		body.department &&
		typeof body.username === "string" &&
		typeof body.password === "string" &&
		typeof body.department === "string"
	) {
		return {
			username: body.username,
			password: body.password,
			department: body.department,
		};
	} else {
		return false;
	}
};

const validLogin = (body) => {
	if (
		body.username &&
		body.password &&
		typeof body.username === "string" &&
		typeof body.password === "string"
	) {
		return {
			username: body.username,
			password: body.password,
		};
	} else {
		return false;
	}
};

const newToken = (user) => {
	const payload = {
		subject: user.id,
		username: user.username,
	};
	const secret = process.env.JWT_SECRET || "yeehaw cowboy";
	const options = {
		expiresIn: "1000s",
	};

	return jwt.sign(payload, secret, options);
};

module.exports = { validReg, validLogin, newToken };
