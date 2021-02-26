const jwt = require("jsonwebtoken");
const secret = require("../secret");

module.exports = (req, res, next) => {
	const token = req.headers.authorization;

	if (token) {
		jwt.verify(token, secret, (err) => {
			if (err) {
				res.status(401).json("token invalid");
			} else {
				next();
			}
		});
	} else {
		res.status(401).json("token required");
	}

	/*
    IMPLEMENT

    1- On valid token in the Authorization header, call next.

    2- On missing token in the Authorization header,
      the response body should include a string exactly as follows: "token required".

    3- On invalid or expired token in the Authorization header,
      the response body should include a string exactly as follows: "token invalid".
  */
};