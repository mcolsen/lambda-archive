const express = require("express");
const projects = require("./projects-model");

const router = express.Router();

const validateId = (req, res, next) => {
	if (req.params.id) {
		projects
			.get(req.params.id)
			.then((r) => {
				if (r) {
					req.project = r;
					next();
				} else {
					res.status(404).end();
				}
			})
			.catch((e) => res.status(500).json({ message: e.message }));
	} else {
		res.status(400).end();
	}
};

const validateNewProject = (req, res, next) => {
	if (req.body.name && req.body.description) {
		next();
	} else {
		res.status(400).end();
	}
};

const validateUpdatedProject = (req, res, next) => {
	if (req.body.name || req.body.description) {
		next();
	} else {
		res.status(400).end();
	}
};

router.get("/", (req, res) => {
	projects
		.get()
		.then((r) => {
			res.status(200).json(r);
		})
		.catch((e) => {
			res.status(500).json({ message: e.message });
		});
});

router.get("/:id", validateId, (req, res) => {
	res.status(200).json(req.project);
});

router.post("/", validateNewProject, (req, res) => {
	projects
		.insert(req.body)
		.then((r) => res.status(200).json(r))
		.catch((e) => res.status(500).json({ message: e.message }));
});

router.put("/:id", [validateId, validateUpdatedProject], (req, res) => {
	projects
		.update(req.params.id, req.body)
		.then((r) => {
			res.status(200).json(r);
		})
		.catch((e) => res.status(500).json({ message: e.message }));
});

router.delete("/:id", validateId, (req, res) => {
	projects
		.remove(req.params.id)
		.then(() => res.status(200).end())
		.catch((e) => res.status(500).json({ message: e.message }));
});

router.get("/:id/actions", validateId, (req, res) => {
	projects
		.getProjectActions(req.params.id)
		.then((r) => res.status(200).json(r))
		.catch((e) => res.status(500).json({ message: e.message }));
});

module.exports = router;
