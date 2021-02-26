exports.seed = function (knex) {
	return knex("recipe_ingredients")
		.del()
		.then(function () {
			return knex("recipe_ingredients").insert([
				{
					recipe_id: 1,
					ingredient_id: 1,
					quantity: 8,
				},
				{
					recipe_id: 1,
					ingredient_id: 2,
					quantity: 1,
				},
				{
					recipe_id: 1,
					ingredient_id: 3,
					quantity: 1,
				},
				{
					recipe_id: 2,
					ingredient_id: 4,
					quantity: 4,
				},
				{
					recipe_id: 3,
					ingredient_id: 5,
					quantity: 5,
				},
			]);
		});
};
