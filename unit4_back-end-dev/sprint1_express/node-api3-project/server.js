const express = require("express");
const userRouter = require("./users/userRouter");
const { logger } = require("./middlewares");

const server = express();

server.use(express.json());
server.use(logger);

server.use("/users", userRouter);

module.exports = server;
