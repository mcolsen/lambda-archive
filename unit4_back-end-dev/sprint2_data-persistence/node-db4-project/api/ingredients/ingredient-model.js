const db = require("../../data/db-config");

const getIngredients = () => {
	return db("ingredients");
};

const getRecipesByIngredient = (id) => {
	return db("ingredients as i")
		.join("recipe_ingredients as ri", "ri.ingredient_id", "i.id")
		.join("recipes as r", "r.id", "ri.recipe_id")
		.select("r.*")
		.where("ri.ingredient_id", id);
};

module.exports = { getIngredients, getRecipesByIngredient };
