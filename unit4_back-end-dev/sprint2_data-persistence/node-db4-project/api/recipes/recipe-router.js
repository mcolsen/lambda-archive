const express = require("express");
const {
	getRecipes,
	getShoppingList,
	getInstructions,
} = require("./recipe-model");

const router = express.Router();

router.get("/", (req, res) => {
	getRecipes()
		.then((r) => res.status(200).json(r))
		.catch((e) => res.status(500).json(e));
});

router.get("/:id/shopping-list", (req, res) => {
	getShoppingList(req.params.id)
		.then((r) => res.status(200).json(r))
		.catch((e) => res.status(500).json(e));
});

router.get("/:id/instructions", (req, res) => {
	getInstructions(req.params.id)
		.then((r) => res.status(200).json(r))
		.catch((e) => res.status(500).json(e));
});

module.exports = router;
