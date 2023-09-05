const { Router } = require("express");

const usersRouter = require("./users.router");
const secretsRouter = require("./secrets.router");
const authRouter = require("./auth.router");

const globalRouter = Router();

globalRouter.use("/users", usersRouter);
globalRouter.use("/auth", authRouter);
globalRouter.use("/secrets", secretsRouter);

module.exports = globalRouter;
