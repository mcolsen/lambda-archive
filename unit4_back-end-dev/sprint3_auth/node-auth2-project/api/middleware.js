const jwt = require("jsonwebtoken");

const secret = process.env.JWT_SECRET || "yeehaw cowboy";

const auth = (req, res, next) => {
	const token = req.headers.authorization;

	if (token) {
		jwt.verify(token, secret, (err, decoded) => {
			if (err) {
				res.status(401).end();
			} else {
				req.decodedToken = decoded;
				next();
			}
		});
	} else {
		res.status(401).end();
	}
};

module.exports = { auth };
