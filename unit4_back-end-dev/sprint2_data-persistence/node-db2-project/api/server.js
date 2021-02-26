const express = require("express");

const { getAllCars, getCar, addCar } = require("../data/db");
const { validateNewCar } = require("./middleware");

const server = express();
server.use(express.json());

server.get("/", (req, res) => {
	getAllCars()
		.then((cars) => res.status(200).json(cars))
		.catch((e) => res.status(500).json(e.message));
});

server.get("/:id", (req, res) => {
	getCar(req.params.id).then((r) => {
		if (r.length === 1) {
			res.status(200).json(r[0]);
		} else if (r.length === 0) {
			res.status(404).end();
		} else {
			res.status(500).end();
		}
	});
});

server.post("/", validateNewCar, (req, res) => {
	addCar(req.car)
		.then((r) => {
			getCar(r[0])
				.then((car) => res.status(200).json(car[0]))
				.catch((e) => res.status(500).json({ message: e.message }));
		})
		.catch((e) => {
			res.status(500).json({ message: e.message });
		});
});

server.use("*", (req, res) => {
	res.status(404).end();
});

module.exports = server;
