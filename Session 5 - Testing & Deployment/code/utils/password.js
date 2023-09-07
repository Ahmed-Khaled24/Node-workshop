const bcrypt = require("bcryptjs");

/**
 * @param {string} password plain text password
 */
async function encryptPassword(password) {
	return await bcrypt.hash(password, 12);
}

/**
 * @param {string} plainPassword the plain text password
 * @param {string} hash the encrypted password (stored in database)
 */
async function validatePassword(plainPassword, hash) {
	return await bcrypt.compare(plainPassword, hash);
}


module.exports = {
	encryptPassword,
	validatePassword,
};
