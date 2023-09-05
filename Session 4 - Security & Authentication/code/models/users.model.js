const { getDbConnection } = require("../services/mongodb");
const { encryptPassword } = require("../utils/password");
const { ObjectId } = require("mongodb");

/**
 * This function is a model function that handle dealing with the
 * database to add new user.
 * @param {{email: string, password: string, username: string}} user
 * @returns {Promise<void>}
 */
async function dbAddNewUser(user) {
	const dbConnection = await getDbConnection();
	user.password = await encryptPassword(user.password);
	return await dbConnection.db(process.env.DB_NAME).collection("users").insertOne(user);
}

/**
 * This function is a model function that handle dealing with the
 * database to get all users.
 * @returns {Promise<user[]>}
 */
async function dbGetAllUsers() {
	const dbConnection = await getDbConnection();
	return await dbConnection.db(process.env.DB_NAME).collection("users").find({}).toArray();
}

/**
 * This function is a model function that handle dealing with the
 * database to get user by id.
 * @param {string} id
 * @returns
 */
async function dbGetUserById(id) {
	const dbConnection = await getDbConnection();
	return await dbConnection
		.db(process.env.DB_NAME)
		.collection("users")
		.findOne({ _id: new ObjectId(id) });
}

/**
 * This function is a model function that handle dealing with the
 * database to get user by email.
 * @param {string} email
 * @returns
 */
async function dbGetUserByEmail(email) {
	const dbConnection = await getDbConnection();
	return await dbConnection.db(process.env.DB_NAME).collection("users").findOne({ email });
}

/**
 * This function is a model function that handle dealing with the
 * database to delete user by id.
 * @param {string} id
 * @returns
 */
async function dbDeleteUserById(id) {
	const dbConnection = await getDbConnection();
	return await dbConnection.db(process.env.DB_NAME).collection("users").deleteOne({ _id: id });
}

module.exports = {
	dbAddNewUser,
	dbGetAllUsers,
	dbGetUserById,
	dbGetUserByEmail,
	dbDeleteUserById,
};
