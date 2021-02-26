exports.up = function (knex) {
	return knex.schema
		.createTable("recipes", (t) => {
			t.increments();
			t.string("name").notNullable();
		})
		.createTable("steps", (t) => {
			t.increments();
			t.string("instructions").notNullable();
			t.integer("step_number").unsigned().notNullable();
			t.integer("recipe_id")
				.unsigned()
				.notNullable()
				.references("id")
				.inTable("recipes")
				.onUpdate("CASCADE")
				.onDelete("CASCADE");
		})
		.createTable("ingredients", (t) => {
			t.increments();
			t.string("name").notNullable();
			t.string("units");
		})
		.createTable("recipe_ingredients", (t) => {
			t.float("quantity").notNullable();
			t.integer("recipe_id")
				.unsigned()
				.notNullable()
				.references("id")
				.inTable("recipes")
				.onUpdate("CASCADE")
				.onDelete("CASCADE");
			t.integer("ingredient_id")
				.unsigned()
				.notNullable()
				.references("id")
				.inTable("ingredients");
			t.primary(["recipe_id", "ingredient_id"]);
		});
};

exports.down = function (knex) {
	return knex.schema
		.dropTableIfExists("recipe_ingredients")
		.dropTableIfExists("ingredients")
		.dropTableIfExists("steps")
		.dropTableIfExists("recipes");
};
