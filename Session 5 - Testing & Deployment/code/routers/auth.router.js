const { Router } = require("express");
const { addNewUser } = require("../controllers/users.controller");
const { logout, jwtLogin } = require("../controllers/auth.controller");
const validateUserData = require("../middlewares/userValidation");

const authRouter = Router();

authRouter.post("/login", jwtLogin);
authRouter.post("/signup", validateUserData, addNewUser);
authRouter.get("/logout", logout);

module.exports = authRouter;
