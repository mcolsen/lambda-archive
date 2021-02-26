const express = require("express");
const {
	bunnies,
	addBunny,
	getNewestBunny,
	getBunniesLength,
	deleteBunny,
} = require("./data");

const server = express();
server.use(express.json());

server.get("/", (req, res) => {
	res.status(200).json(bunnies);
});

server.post("/", (req, res) => {
	if (req.body.name) {
		addBunny({
			name: req.body.name,
			age: req.body.age,
			breed: req.body.breed,
		});
		res.status(200).json(getNewestBunny());
	} else {
		res.status(500).end();
	}
});

server.delete("/:index", (req, res) => {
	const index = Number(req.params.index);

	if (getBunniesLength() === 0) {
		res.status(404).end();
	} else if (getBunniesLength() > index - 1) {
		deleteBunny(index);
		res.status(200).end();
	} else {
		res.status(404).end();
	}
});

module.exports = server;
