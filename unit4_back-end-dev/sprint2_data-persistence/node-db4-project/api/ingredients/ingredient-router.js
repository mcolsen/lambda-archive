const express = require("express");
const {
	getIngredients,
	getRecipesByIngredient,
} = require("./ingredient-model");

const router = express.Router();

router.get("/", (req, res) => {
	getIngredients()
		.then((r) => res.status(200).json(r))
		.catch((e) => res.status(500).json(e));
});
router.get("/:id/recipes", (req, res) => {
	getRecipesByIngredient(req.params.id)
		.then((r) => res.status(200).json(r))
		.catch((e) => {
			console.log(e);
			res.status(500).json(e);
		});
});

module.exports = router;
