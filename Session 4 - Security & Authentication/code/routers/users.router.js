const { Router } = require("express");
const {
	getAllUsers,
	addNewUser,
	getUserById,
	deleteUserById,
} = require("../controllers/users.controller");

const usersRouter = Router();

usersRouter.get("/", getAllUsers);
usersRouter.get("/:id", getUserById);
usersRouter.post("/", addNewUser);
usersRouter.delete("/:id", deleteUserById);

module.exports = usersRouter;
