const { Router } = require("express");
const { addNewUser } = require("../controllers/users.controller");
const { logout, jwtLogin } = require("../controllers/auth.controller");
const passport = require("passport");

const authRouter = Router();

authRouter.post(
	"/login",
	// passport.authenticate("local", {
	// 	successRedirect: "login/success",
	// 	failureRedirect: "login/failed",
	// }) // Comment this when JWT
	jwtLogin
);
authRouter.post("/signup", addNewUser);
authRouter.get("/logout", logout);
authRouter.get("/login/success", (req, res) => {
	res.status(200).json({ status: "success", data: "user authenticated" });
});
authRouter.get("/login/failed", (req, res) => {
	res.status(401).json({ status: "failed", data: "user not authenticated" });
});

module.exports = authRouter;
