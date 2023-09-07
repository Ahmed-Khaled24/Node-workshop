const { getDbCollection } = require("../services/mongodb");
const { encryptPassword } = require("../utils/password");
const { ObjectId } = require("mongodb");

/**
 * This function is a model function that handle dealing with the
 * database to add new user.
 * @param {{email: string, password: string, username: string}} user
 * @returns {Promise<void>}
 */
async function dbAddNewUser(user) {
	const usersCollection = getDbCollection("users");
	user.password = await encryptPassword(user.password);
	return await usersCollection.insertOne(user);
}

/**
 * This function is a model function that handle dealing with the
 * database to get all users.
 * @returns {Promise<user[]>}
 */
async function dbGetAllUsers() {
	const usersCollection = getDbCollection("users");
	return await usersCollection.find({}).toArray();
}

/**
 * This function is a model function that handle dealing with the
 * database to get user by id.
 * @param {string} id
 * @returns
 */
async function dbGetUserById(id) {
	const usersCollection = getDbCollection("users");
	return await usersCollection.findOne({ _id: new ObjectId(id) });
}

/**
 * This function is a model function that handle dealing with the
 * database to get user by email.
 * @param {string} email
 * @returns
 */
async function dbGetUserByEmail(email) {
	const usersCollection = getDbCollection("users");
	return await usersCollection.findOne({ email });
}

/**
 * This function is a model function that handle dealing with the
 * database to delete user by id.
 * @param {string} id
 * @returns
 */
async function dbDeleteUserById(id) {
	const usersCollection = getDbCollection("users");
	return await usersCollection.deleteOne({ _id: id });
}

module.exports = {
	dbAddNewUser,
	dbGetAllUsers,
	dbGetUserById,
	dbGetUserByEmail,
	dbDeleteUserById,
};
