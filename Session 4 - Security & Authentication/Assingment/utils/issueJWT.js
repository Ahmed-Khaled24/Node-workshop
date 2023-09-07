const jwt = require("jsonwebtoken");

function issueJWT(user) {
	const options = {
		algorithm: "HS256",
		expiresIn: "1d",
	};
	const payload = {
		sub: user._id,
	};
	const token = jwt.sign(payload, process.env.JWT_SECRET, options);
	return token;
}

module.exports = {
	issueJWT,
};
