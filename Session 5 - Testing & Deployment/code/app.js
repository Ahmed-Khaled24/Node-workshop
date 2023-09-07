const express = require("express");
const passport = require("passport");

const globalRouter = require("./routers");

const app = express();

app.use(express.json());
app.use(express.text());
app.use(passport.initialize());
app.use("/", globalRouter);

module.exports = app;
