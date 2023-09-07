const passport = require("passport");
const jwtStrategy = require("passport-jwt").Strategy;
const { ExtractJwt } = require("passport-jwt");
const { dbGetUserById } = require("../models/users.model");

const options = {
	secretOrKey: process.env.JWT_SECRET,
	jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
};

async function jwtVerify(payload, done) {
	try {
		const user = await dbGetUserById(payload.sub);
		if (user) {
			return done(null, user);
		} else {
			return done(null, false);
		}
	} catch (error) {
		return done(error, false);
	}
}

passport.use(new jwtStrategy(options, jwtVerify));
