const express = require("express");
const { getProjects, addProject } = require("./model");

const router = express.Router();

router.get("/", (req, res) => {
	getProjects()
		.then((r) => res.status(200).json(r))
		.catch((e) => {
			console.log(e);
			res.status(500).json(e);
		});
});
router.post("/", (req, res) => {
	addProject(req.body)
		.then((r) => res.status(201).json(r))
		.catch((e) => res.status(500).json(e));
});

module.exports = router;
