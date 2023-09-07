const passport = require("passport");
const JWTStrategy = require("passport-jwt").Strategy;
const ExtractJWT = require("passport-jwt").ExtractJwt;

const { dbGetUserById } = require("../models/users.model");

const jwtStrategyOptions = {
	jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),
	secretOrKey: process.env.JWT_SECRET,
};

async function jwtStrategyVerify(payload, done) {
	const user = await dbGetUserById(payload.sub);
	if (!user) {
		return done(null, false);
	}
	return done(null, user);
}

passport.use(new JWTStrategy(jwtStrategyOptions, jwtStrategyVerify));
