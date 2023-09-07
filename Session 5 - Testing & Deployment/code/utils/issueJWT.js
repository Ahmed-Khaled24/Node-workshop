const jwt = require("jsonwebtoken");

function issueJWT(user) {
	const header = {
		algorithm: "HS256",
		expiresIn: "1d",
	};
	const payload = {
		sub: user._id,
	};
	const token = jwt.sign(payload, process.env.JWT_SECRET, header);
	return token;
}

module.exports = issueJWT;