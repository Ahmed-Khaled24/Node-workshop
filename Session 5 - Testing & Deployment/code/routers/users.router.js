const { Router } = require("express");
const {
	getAllUsers,
	addNewUser,
	getUserById,
	deleteUserById,
} = require("../controllers/users.controller");
const validateUserData = require("../middlewares/userValidation");

const usersRouter = Router();

usersRouter.get("/", getAllUsers);
usersRouter.get("/:id", getUserById);
usersRouter.post("/", validateUserData ,addNewUser);
usersRouter.delete("/:id", deleteUserById);

module.exports = usersRouter;
