const jwt = require("jsonwebtoken");

function issueJWT(user) {
	const options = {
		algorithm: "HS256",
		expiresIn: "7d",
	};
	const payload = {
		sub: user._id,
		iat: Date.now(),
	};
	const token = jwt.sign(payload, process.env.JWT_SECRET, options);
	return token;
}

module.exports = issueJWT;