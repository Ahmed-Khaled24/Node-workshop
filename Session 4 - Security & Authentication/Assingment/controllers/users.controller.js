const { dbAddNewUser } = require("../models/users.model");

async function addNewUser(req, res) {
	try {
		const result = await dbAddNewUser(req.body);
		res.status(201).json(result);
	} catch (error) {
		res.status(500).json(error);
	}
}

module.exports = {
	addNewUser,
};
