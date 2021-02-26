const express = require("express");
const cors = require("cors");

const server = express();
server.use(cors());
server.use(express.json());

server.get("/api*", (req, res) => {
	res.status(200).json({
		message: "Welcome to the test API",
	});
});

server.listen(process.env.PORT || 5000, () => {
	console.log("Listening on port 5000");
});
