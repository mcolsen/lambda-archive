const express = require("express");
const helmet = require("helmet");
const cors = require("cors");
const router = require("./router");

const server = express();

server.use(helmet());
server.use(cors());
server.use(express.json());

server.use("/api", router);

server.use("*", (req, res) => {
	res.status(404).end();
});

module.exports = server;
