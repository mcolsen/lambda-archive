const express = require("express");
const helmet = require("helmet");
const session = require("express-session");
const router = require("./router");

const sessionConfig = {
	name: "sessionId",
	secret: "yeehaw cowboy",
	cookie: {
		maxAge: 1000 * 60 * 60,
		secure: false,
		httpOnly: true,
	},
	resave: false,
	saveUninitialized: false,
};

const server = express();
server.use(helmet());
server.use(session(sessionConfig));
server.use(express.json());

server.use("/api", router);

server.use("*", (req, res) => {
	res.status(404).end();
});

module.exports = server;
