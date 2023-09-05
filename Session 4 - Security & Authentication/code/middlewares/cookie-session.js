const cookieSession = require("cookie-session");

const cookieSessionMiddleware = cookieSession({
	name: "Semicolon Authentication",
	secret: process.env.COOKIE_SECRET,
	secure: false,
	maxAge: 1000 * 60 * 60 * 24 * 7, // 7 days
});

module.exports = cookieSessionMiddleware;
