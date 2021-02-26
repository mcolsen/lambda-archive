exports.seed = function (knex) {
	return knex("steps")
		.del()
		.then(function () {
			return knex("steps").insert([
				{
					recipe_id: 1,
					step_number: 1,
					instructions: "Mix diced Spicy Pepper with ground Raw Meat",
				},
				{
					recipe_id: 1,
					step_number: 2,
					instructions: "Add cubed Hyrule Bass",
				},
				{
					recipe_id: 1,
					step_number: 3,
					instructions: "Cook over campfire for 35 minutes",
				},
				{
					recipe_id: 2,
					step_number: 1,
					instructions: "Peel and slice Mighty Bananas",
				},
				{
					recipe_id: 2,
					step_number: 2,
					instructions: "Cook over campire in closed container for 10 minutes",
				},
				{
					recipe_id: 3,
					step_number: 1,
					instructions:
						"Roast Silent Shrooms over campire until thoroughly browned",
				},
				{
					recipe_id: 3,
					step_number: 2,
					instructions:
						"Gently slide the roasted Silent Shrooms onto a skewer stick",
				},
			]);
		});
};
