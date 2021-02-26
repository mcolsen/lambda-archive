const db = require("../../data/dbConfig");

const getTasks = () => {
	return db("tasks as t")
		.join("projects as p", "p.id", "t.project_id")
		.select(
			"t.*",
			"p.name as project_name",
			"p.description as project_description"
		)
		.then((tasks) =>
			tasks.map((t) => ({ ...t, completed: t.completed ? true : false }))
		);
};

const addTask = (task) => {
	return db("tasks")
		.insert(task)
		.then((r) => {
			return db("tasks")
				.where("id", r[0])
				.then((r) => ({ ...r[0], completed: r[0].completed ? true : false }));
		});
};

module.exports = { getTasks, addTask };
