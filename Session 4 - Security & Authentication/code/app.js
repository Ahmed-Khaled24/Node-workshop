const express = require("express");
const passport = require("passport");

const globalRouter = require("./routers");
const cookieSessionMiddleware = require("./middlewares/cookie-session"); // Comment this when JWT

const app = express();

app.use(express.json());
app.use(express.text());
app.use(cookieSessionMiddleware); // Comment this when JWT
app.use(passport.initialize());
app.use(passport.session()); // Comment this when JWT
app.use("/", globalRouter);

module.exports = app;
