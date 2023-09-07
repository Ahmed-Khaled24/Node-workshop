const { dbAddUser } = require("../models/user.model");

const postUser = async (req, res) => {
	const addedUser = await dbAddUser(req.body.username, req.body.password);
	return res.status(201).json(addedUser);
};

module.exports = {
	postUser,
};
