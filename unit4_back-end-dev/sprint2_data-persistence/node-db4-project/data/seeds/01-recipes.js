//	Recipes adapted from The Legend of Zelda: Breath of the Wild

exports.seed = function (knex) {
	return knex("recipes")
		.del()
		.then(function () {
			return knex("recipes").insert([
				{ name: "Spicy Meat and Seafood Fry" },
				{ name: "Mighty Simmered Fruit" },
				{ name: "Sneaky Mushroom Skewer" },
			]);
		});
};
