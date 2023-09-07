const { Router } = require("express");
const { getCollection } = require("../services/db");
const { postUser } = require("../controllers/users.controller");

const userRouter = Router();

userRouter.post("/", postUser);

module.exports = userRouter;
