const { ObjectId } = require("mongodb");
const { getDbConnection } = require("../services/mongodb");

/**
 * This is a model function that deal with the database
 * to return all secrets.
 * @returns
 */
async function dbGetAllSecrets() {
	const dbConnection = await getDbConnection();
	const secrets = await dbConnection
		.db(process.env.DB_NAME)
		.collection("secrets")
		.find({})
		.toArray();
	return secrets;
}

/**
 * This is a model function that deal with the database
 * to add a new secret.
 * @param {{data: string, createdBy: userId}} secret
 * @returns
 */
async function dbAddNewSecret(secret) {
	const dbConnection = await getDbConnection();
	const result = await dbConnection
		.db(process.env.DB_NAME)
		.collection("secrets")
		.insertOne({ secret });
	return result;
}

/**
 * This is a model function that deal with the database
 * to delete a secret by id.
 * @param {string} secretId
 * @returns
 */
async function dbDeleteSecretById(secretId) {
	const dbConnection = await getDbConnection();
	const result = dbConnection
		.db(process.env.DB_NAME)
		.collection("secrets")
		.deleteOne({ _id: new ObjectId(secretId) });
	return result;
}

module.exports = {
	dbGetAllSecrets,
	dbAddNewSecret,
	dbDeleteSecretById,
};
