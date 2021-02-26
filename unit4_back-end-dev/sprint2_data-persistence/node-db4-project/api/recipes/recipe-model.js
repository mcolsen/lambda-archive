const db = require("../../data/db-config");

const getRecipes = () => {
	return db("recipes");
};

const getShoppingList = (id) => {
	return db("recipes as r")
		.join("recipe_ingredients as ri", "ri.recipe_id", "r.id")
		.join("ingredients as i", "i.id", "ri.ingredient_id")
		.select("i.name", "ri.quantity", "i.units")
		.where("ri.recipe_id", id);
};

const getInstructions = (id) => {
	return db("recipes as r")
		.join("steps as s", "s.recipe_id", "r.id")
		.select("s.step_number", "s.instructions")
		.where("s.recipe_id", id)
		.orderBy("s.step_number");
};

module.exports = {
	getRecipes,
	getShoppingList,
	getInstructions,
};
