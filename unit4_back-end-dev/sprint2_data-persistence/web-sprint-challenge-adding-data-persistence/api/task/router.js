const express = require("express");
const { getTasks, addTask } = require("./model");

const router = express.Router();

router.get("/", (req, res) => {
	getTasks()
		.then((r) => res.status(200).json(r))
		.catch((e) => res.status(500).json(e));
});
router.post("/", (req, res) => {
	addTask(req.body)
		.then((r) => res.status(201).json(r))
		.catch((e) => {
			console.log(e);
			if (e.code === "SQLITE_CONSTRAINT") {
				res.status(400).json(e);
			} else {
				res.status(500).json(e);
			}
		});
});

module.exports = router;
