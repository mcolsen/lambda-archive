const express = require("express");
const { findById, findPostComments } = require("./data/db");
const db = require("./data/db");

const router = express.Router();

//	Create post
router.post("/", (req, res) => {
	if (!req.body.title || !req.body.contents) {
		res.status(400).json({
			errorMessage: "Please provide title and contents for the post.",
		});
	} else {
		db.insert({ title: req.body.title, contents: req.body.contents })
			.then((r) => {
				db.findById(r.id)
					.then((post) => {
						res.status(201).json(post);
					})
					.catch((err) => {
						res.status(500).json({
							error: "There was an error retrieving the post from the database",
						});
					});
			})
			.catch((err) => {
				res.status(500).json({
					error: "There was an error while saving the post to the database",
				});
			});
	}
});

//	Create comment on specified post
router.post("/:id/comments", (req, res) => {
	const { id } = req.params;
	db.findById(id)
		.then((r) => {
			if (r.length === 1) {
				if (req.body.text) {
					db.insertComment({
						text: req.body.text,
						post_id: id,
					})
						.then((r) => {
							db.findCommentById(r.id)
								.then((comment) => {
									res.status(201).json(comment);
								})
								.catch((e) => {
									res.status(500).json({
										error:
											"There was an error retrieving the comment from the database",
									});
								});
						})
						.catch((e) => {
							res.status(500).json({
								error:
									"There was an error while saving the comment to the database",
							});
						});
				} else {
					res
						.status(400)
						.json({ errorMessage: "Please provide text for the comment." });
				}
			} else {
				res
					.status(404)
					.json({ message: "The post with the specified ID does not exist." });
			}
		})
		.catch((e) => {});
});

//	Get all posts
router.get("/", (req, res) => {
	db.find()
		.then((r) => {
			res.status(200).json(r);
		})
		.catch((e) => {
			res
				.status(500)
				.json({ error: "The posts information could not be retrieved." });
		});
});

//	Get specified post
router.get("/:id", (req, res) => {
	const { id } = req.params;
	db.findById(id)
		.then((r) => {
			if (r.length === 1) {
				res.status(200).json(r[0]);
			} else {
				res
					.status(404)
					.json({ message: "The post with the specified ID does not exist." });
			}
		})
		.catch((e) => {
			res
				.status(500)
				.json({ error: "The post information could not be retrieved." });
		});
});

//	Get comments for specified post
router.get("/:id/comments", (req, res) => {
	const { id } = req.params;

	db.findById(id)
		.then((r) => {
			if (r.length === 1) {
				findPostComments(id)
					.then((comments) => {
						res.status(200).json(comments);
					})
					.catch((e) => {
						res.status(500).json({
							error: "The comments information could not be retrieved.",
						});
					});
			} else {
				res
					.status(404)
					.json({ message: "The post with the specified ID does not exist." });
			}
		})
		.catch((e) => {
			res
				.status(500)
				.json({ error: "The post information could not be retrieved." });
		});
});

//	Delete specified post
router.delete("/:id", (req, res) => {
	const { id } = req.params;

	db.findById(id)
		.then((r) => {
			if (r.length === 1) {
				const post = r;
				db.remove(id)
					.then((r) => {
						res.status(200).json(post);
					})
					.catch((e) => {
						res.status(500).json({ error: "The post could not be removed" });
					});
			} else {
				res
					.status(404)
					.json({ message: "The post with the specified ID does not exist." });
			}
		})
		.catch((e) => {
			res
				.status(500)
				.json({ error: "The post information could not be retrieved." });
		});
});

//	Update specified post
router.put("/:id", (req, res) => {
	const { id } = req.params;

	db.findById(id)
		.then((r) => {
			if (r.length === 1) {
				if (req.body.title && req.body.contents) {
					db.update(id, {
						title: req.body.title,
						contents: req.body.contents,
					})
						.then((r) => {
							if (r === 1) {
								db.findById(id)
									.then((post) => {
										res.status(200).json(post);
									})
									.catch((e) => {
										res.status(500).json({
											error: "The post information could not be retrieved.",
										});
									});
							} else {
								res.status(500).json({
									error: "The post information could not be modified.",
								});
							}
						})
						.catch((e) => {
							res
								.status(500)
								.json({ error: "The post information could not be modified." });
						});
				} else {
					res.status(400).json({
						errorMessage: "Please provide title and contents for the post.",
					});
				}
			} else {
				res
					.status(404)
					.json({ message: "The post with the specified ID does not exist." });
			}
		})
		.catch((e) => {
			res
				.status(500)
				.json({ error: "The post information could not be retrieved." });
		});
});

module.exports = router;
