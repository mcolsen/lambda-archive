exports.seed = function (knex) {
	return knex("ingredients")
		.del()
		.then(function () {
			return knex("ingredients").insert([
				{
					name: "Raw Meat",
					units: "oz",
				},
				{ name: "Hyrule Bass" },
				{ name: "Spicy Pepper" },
				{ name: "Mighty Banana" },
				{ name: "Silent Shroom" },
			]);
		});
};
