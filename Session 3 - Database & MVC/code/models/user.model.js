const {getCollection} = require('../services/db')
/**
 * @param {string} username
 * @param {string} email
 */
async function dbAddUser(username, password) {
	const userCollection = getCollection("users");
	const addedUser = await userCollection.insertOne({
		username,
		password
	});
	return addedUser;
}

module.exports = {
	dbAddUser,
};
