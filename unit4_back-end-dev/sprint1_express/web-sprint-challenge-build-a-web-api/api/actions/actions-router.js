const { json } = require("express");
const express = require("express");
const actions = require("./actions-model");

const router = express.Router();

const validateId = (req, res, next) => {
	if (req.params.id) {
		actions
			.get(req.params.id)
			.then((r) => {
				if (r) {
					req.action = r;
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

const validateNewAction = (req, res, next) => {
	if (req.body.project_id && req.body.description && req.body.notes) {
		next();
	} else {
		res.status(400).end();
	}
};

const validateUpdatedAction = (req, res, next) => {
	if (req.body.project_id || req.body.description || req.body.notes) {
		next();
	} else {
		res.status(400).end();
	}
};

router.get("/", (req, res) => {
	actions
		.get()
		.then((r) => res.status(200).json(r))
		.catch((e) => res.status(500).json({ message: e.message }));
});

router.get("/:id", validateId, (req, res) => {
	res.status(200).json(req.action);
});

router.post("/", validateNewAction, (req, res) => {
	actions
		.insert(req.body)
		.then((r) => res.status(200).json(r))
		.catch((e) => res.status(500).json({ message: e.message }));
});

router.put("/:id", [validateId, validateUpdatedAction], (req, res) => {
	actions
		.update(req.params.id, req.body)
		.then((r) => res.status(200).json(r))
		.catch((e) => res.status(500).json({ message: e.message }));
});

router.delete("/:id", validateId, (req, res) => {
	actions
		.remove(req.params.id)
		.then(() => res.status(200).end())
		.catch((e) => res.status(500).json({ message: e.message }));
});

module.exports = router;
