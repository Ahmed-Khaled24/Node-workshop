const {
	dbAddNewUser,
	dbDeleteUserById,
	dbGetAllUsers,
	dbGetUserById,
} = require("../models/users.model");

/**
 * This function is a controller function that handle the API
 * requests to add new user.
 */
async function addNewUser(req, res) {
	try {
		const user = req.body;
		const result = await dbAddNewUser(user);
		res.status(201).json({
			status: "success",
			data: result,
		});
	} catch (error) {
		res.status(500).json({
			status: "failure",
			data: error.message,
		});
	}
}

/**
 * This function is a controller function that handle the API
 * requests to get user by id.
 */
async function getUserById(req, res) {
	const { id } = req.params;
	try {
		const result = await dbGetUserById(id);
		res.status(200).json({
			status: "success",
			data: result,
		});
	} catch (error) {
		res.status(500).json({
			status: "failure",
			data: error.message,
		});
	}
}

/**
 * This function is a controller function that handle the API
 * requests to delete user by id.
 */
async function getAllUsers(req, res) {
	try {
		const result = await dbGetAllUsers();
		res.status(200).json({
			status: "success",
			data: result,
		});
	} catch (error) {
		res.status(500).json({
			status: "failure",
			data: error.message,
		});
	}
}

/**
 * This function is a controller function that handle the API
 * requests to delete user by id.
 */
async function deleteUserById(req, res) {
	const { id } = req.params;
	try {
		const result = await dbDeleteUserById(id);
		res.status(200).json({
			status: "success",
			data: result,
		});
	} catch (error) {
		res.status(500).json({
			status: "failure",
			data: error.message,
		});
	}
}

module.exports = {
	addNewUser,
	getUserById,
	getAllUsers,
	deleteUserById,
};
