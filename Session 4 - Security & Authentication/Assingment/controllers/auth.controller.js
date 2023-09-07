const { dbGetUserByEmail } = require("../models/users.model");
const { issueJWT } = require("../utils/issueJWT");

async function login(req, res) {
	const { email, password } = req.body;
	const user = await dbGetUserByEmail(email);
	if (!user) {
		return res.status(401).json({ message: "User not found" });
	}
	if (password !== user.password) {
		return res.status(401).json({ message: "Password incorrect" });
	}
	const token = issueJWT(user);
	return res.status(200).json({ token });
}

module.exports = {
	login,
};
