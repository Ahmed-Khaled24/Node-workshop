const { dbGetUserByEmail } = require("../models/users.model");
const { validatePassword } = require("../utils/password");
const issueJWT = require("../utils/issueJWT");

function logout(req, res) {
	req.logout();
	res.redirect("/");
}

async function jwtLogin(req, res) {
	const { email, password } = req.body;
	const user = await dbGetUserByEmail(email);
	if (!user) {
		return res.status(401).json({ status: "failed", data: "invalid email or password" });
	}
	const validPassword = await validatePassword(password, user.password);
	if (!validPassword) {
		return res.status(401).json({ status: "failed", data: "invalid email or password" });
	}
	const token = issueJWT(user);
	return res.status(200).json({ status: "success", data: token });
}

module.exports = {
	logout,
	jwtLogin,
};
