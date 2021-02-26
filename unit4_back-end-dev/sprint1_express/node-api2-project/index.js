const express = require("express");
const router = require("./posts");

const server = express();

server.use(express.json());

server.use("/api/posts", router);

server.listen(5000, () => {
	console.log("Server listening on port 5000");
});
