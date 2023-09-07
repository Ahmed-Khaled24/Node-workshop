const passport = require("passport");
const { dbGetUserById, dbGetUserByEmail } = require("../models/users.model");
const { validatePassword } = require("../utils/password");
const localStrategy = require("passport-local").Strategy;

passport.serializeUser((user, done) => {
	done(null, user._id);
});

passport.deserializeUser(async (userId, done) => {
	const user = await dbGetUserById(userId);
	done(null, user);
});

async function localStrategyVerify(email, password, done) {
	const user = await dbGetUserByEmail(email);
	if (!user) {
		return done(null, false);
	}
	const isValidPassword = await validatePassword(password, user.password);
	if (!isValidPassword) {
		return done(null, false);
	}
	return done(null, user);
}

const localStrategyOptions = {
	usernameField: "email",
	passwordField: "password",
};

passport.use(new localStrategy(localStrategyOptions, localStrategyVerify));
