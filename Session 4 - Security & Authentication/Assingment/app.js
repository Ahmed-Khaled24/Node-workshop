const express = require("express");
const usersRouter = require("./routers/users.router");
const passport = require("passport");
const { login } = require("./controllers/auth.controller");

const app = express();
app.use(express.json());
app.use(passport.initialize());
app.use("/users", usersRouter);
app.post("/login", login);

app.get("/dashboard", passport.authenticate("jwt", { session: false }), (req, res) => {
	req.user;
	res.send("Dashboard");
});

app.get("/profile", passport.authenticate("jwt", { session: false }), (req, res) => {
	res.send("Profile");
});

module.exports = app;
