const express = require("express");
const helmet = require("helmet");

const recipeRouter = require("./recipes/recipe-router");
const ingredientRouter = require("./ingredients/ingredient-router");

const server = express();

server.use(helmet());
server.use(express.json());

server.use("/api/recipes/", recipeRouter);
server.use("/api/ingredients", ingredientRouter);

server.use("*", (req, res) => {
	res.status(404).end();
});

module.exports = server;
