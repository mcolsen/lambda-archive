const db = require("../../data/dbConfig");

const getProjects = () => {
	return db("projects").then((projects) =>
		projects.map((p) => ({ ...p, completed: p.completed ? true : false }))
	);
};

const addProject = (project) => {
	return db("projects")
		.insert(project)
		.then((r) => {
			return db("projects")
				.where("id", r[0])
				.then((r) => ({ ...r[0], completed: r[0].completed ? true : false }));
		});
};

module.exports = { getProjects, addProject };
