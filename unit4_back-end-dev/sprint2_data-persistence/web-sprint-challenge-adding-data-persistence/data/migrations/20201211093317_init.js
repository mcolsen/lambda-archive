exports.up = function (knex) {
	return knex.schema
		.createTable("projects", (t) => {
			t.increments();
			t.string("name").notNullable();
			t.string("description");
			t.boolean("completed").defaultTo(false);
		})
		.createTable("resources", (t) => {
			t.increments();
			t.string("name").notNullable().unique();
			t.string("description");
		})
		.createTable("tasks", (t) => {
			t.increments();
			t.string("description").notNullable();
			t.string("notes");
			t.boolean("completed").defaultTo(false);
			t.integer("project_id")
				.unsigned()
				.notNullable()
				.references("id")
				.inTable("projects")
				.onUpdate("CASCADE")
				.onDelete("CASCADE");
		})
		.createTable("project-resources", (t) => {
			t.integer("project_id")
				.unsigned()
				.notNullable()
				.references("id")
				.inTable("projects")
				.onUpdate("CASCADE")
				.onDelete("CASCADE");
			t.integer("resource_id")
				.unsigned()
				.notNullable()
				.references("id")
				.inTable("resources")
				.onUpdate("CASCADE")
				.onDelete("CASCADE");
			t.primary(["project_id", "resource_id"]);
		});
};

exports.down = function (knex) {
	return knex.schema
		.dropTableIfExists("project-resources")
		.dropTableIfExists("tasks")
		.dropTableIfExists("resources")
		.dropTableIfExists("projects");
};
