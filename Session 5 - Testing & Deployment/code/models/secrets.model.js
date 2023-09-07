const { ObjectId } = require("mongodb");
const { getDbCollection } = require("../services/mongodb");

/**
 * This is a model function that deal with the database
 * to return all secrets.
 * @returns
 */
async function dbGetAllSecrets() {
	const secretsCollection = getDbCollection("secrets");
	const secrets = await secretsCollection.find({}).toArray();
	return secrets;
}

/**
 * This is a model function that deal with the database
 * to add a new secret.
 * @param {{data: string, createdBy: userId}} secret
 * @returns
 */
async function dbAddNewSecret(secret) {
	const secretsCollection = getDbCollection("secrets");
	const result = await secretsCollection.insertOne({ secret });
	return result;
}

/**
 * This is a model function that deal with the database
 * to delete a secret by id.
 * @param {string} secretId
 * @returns
 */
async function dbDeleteSecretById(secretId) {
	const secretsCollection = getDbCollection("secrets");
	const result = await secretsCollection.deleteOne({ _id: new ObjectId(secretId) });
	return result;
}

module.exports = {
	dbGetAllSecrets,
	dbAddNewSecret,
	dbDeleteSecretById,
};
