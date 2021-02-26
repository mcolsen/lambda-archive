const express = require("express");
const db = require("./userDb");
const {
	validateUserId,
	validateUser,
	validatePost,
} = require("../middlewares");

const router = express.Router();

router.post("/", validateUser, (req, res) => {
	db.insert({ name: req.body.name })
		.then((r) => {
			res.status(200).json({ message: `${r.name} (${r.id}) created` });
		})
		.catch((e) => {
			res.status(500).json({ message: e.message });
		});
});

router.post("/:id/posts", [validateUserId, validatePost], (req, res) => {
	const { insert } = require("../posts/postDb");
	insert({ text: req.body.text, user_id: req.params.id })
		.then(() => {
			res.status(200).json({
				message: `new post by ${req.user.name} (${req.user.id}) created`,
			});
		})
		.catch((e) => {
			res.status(500).json({ message: e.message });
		});
});

router.get("/", (req, res) => {
	db.get()
		.then((r) => {
			res.status(200).json(r);
		})
		.catch((e) => {
			res.status(500).json({ message: e.message });
		});
});

router.get("/:id", validateUserId, (req, res) => {
	db.getById(req.params.id)
		.then((r) => {
			res.status(200).json(r);
		})
		.catch((e) => {
			res.status(500).json({ message: e.message });
		});
});

router.get("/:id/posts", validateUserId, (req, res) => {
	db.getUserPosts(req.params.id)
		.then((r) => {
			res.status(200).json(r);
		})
		.catch((e) => {
			res.status(500).json({ message: e.message });
		});
});

router.delete("/:id", validateUserId, (req, res) => {
	db.remove(req.params.id)
		.then((r) => {
			if (r === 1) {
				res
					.status(200)
					.json({ message: `${req.user.name} (${req.params.id}) deleted` });
			} else {
				res.status(500).json({ message: "unknown database error" });
			}
		})
		.catch((e) => {
			res.status(500).json({ message: e.message });
		});
});

router.put("/:id", [validateUserId, validateUser], (req, res) => {
	db.update(req.params.id, { name: req.body.name })
		.then((r) => {
			if (r === 1) {
				res
					.status(200)
					.json({ message: `${req.body.name} (${req.user.id}) updated` });
			}
		})
		.catch((e) => {
			res.status(500).json({ message: e.message });
		});
});

module.exports = router;
