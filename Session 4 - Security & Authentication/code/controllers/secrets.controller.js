const { dbGetAllSecrets, dbAddNewSecret, dbDeleteSecretById } = require("../models/secrets.model");

/**
 * This is a controller function that handles the request
 * to get all secrets.
 */
async function getAllSecrets(req, res) {
	console.log(req.user);
	try {
		const secrets = await dbGetAllSecrets();
		res.json({
			status: "success",
			data: secrets,
		});
	} catch (error) {
		res.status(500).json({
			status: "failure",
			message: error.message,
		});
	}
}

/**
 * This is a controller function that handles the request
 * to add a new secret.
 */
async function addNewSecret(req, res) {
	const { secret } = req.body;
	try {
		const result = await dbAddNewSecret(secret);
		res.json({
			status: "success",
			data: result,
		});
	} catch (error) {
		res.status(500).json({
			status: "failure",
			message: error.message,
		});
	}
}

/**
 * This is a controller function that handles the request
 * to delete a secret by id.
 */
async function deleteSecretById(req, res) {
	const { secretId } = req.params;
	try {
		const result = await dbDeleteSecretById(secretId);
		res.json({
			status: "success",
			data: result,
		});
	} catch (error) {
		res.status(500).json({
			status: "failure",
			message: error.message,
		});
	}
}

module.exports = {
	getAllSecrets,
	addNewSecret,
	deleteSecretById,
};
