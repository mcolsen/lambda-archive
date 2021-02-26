const express = require("express");
const { getResources, addResource } = require("./model");

const router = express.Router();

router.get("/", (req, res) => {
	getResources()
		.then((r) => res.status(200).json(r))
		.catch((e) => res.status(500).json(e));
});
router.post("/", (req, res) => {
	addResource(req.body)
		.then((r) => res.status(201).json(r))
		.catch((e) => {
			if (e.code === "SQLITE_CONSTRAINT") {
				res.status(400).json(e);
			} else {
				res.status(500).json(e);
			}
		});
});

module.exports = router;
