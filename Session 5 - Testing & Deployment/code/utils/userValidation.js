/**
 * validator to validate username
 * @param {string} username
 */
function validateUsername(username) {
	// username must be a string
	if (typeof username !== "string") {
		throw new Error("username must be a string");
	}
	// username must be between 6 and 20 characters
	if (username.length < 6 || username.length > 20) {
		throw new Error("username must be between 6 and 20 characters");
	}
	// username must contain only alphanumeric characters
	if (!username.match(/^[a-zA-Z0-9]+$/)) {
		throw new Error("username must contain only alphanumeric characters");
	}
	return true;
}

/**
 * validator to validate password
 * @param {string} password
 */
function validateUserPassword(password) {
	// password must be a string
	if (typeof password !== "string") {
		throw new Error("password must be a string");
	}
	// password must be between 8 and 20 characters
	if (password.length < 8 || password.length > 20) {
		throw new Error("password must be between 8 and 20 characters");
	}
	// password must contain at least one lowercase letter, one uppercase letter, one numeric digit, and one special character
	if (!password.match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])/)) {
		throw new Error(
			"password must contain at least one lowercase letter, one uppercase letter, one numeric digit, and one special character"
		);
	}
}

/**
 * validator to validate email
 * @param {string} email
 */
function validateUserEmail(email) {
	// email must be a string
	if (typeof email !== "string") {
		throw new Error("email must be a string");
	}
	// email must not be empty string
	if (email.trim().length === 0) {
		throw new Error("email must not be empty string");
	}
	// email must be a valid email
	if (!email.match(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/)) {
		throw new Error("email must be a valid email");
	}
}

/**
 * validator to validate user role
 * @param {string} role
 */
function validateUserRole(role) {
	// role must be a string
	if (typeof role !== "string") {
		throw new Error("role must be a string");
	}
	// role must be either "admin" or "user"
	if (role !== "admin" && role !== "user") {
		throw new Error('role must be either "admin" or "user"');
	}
}

/**
 * entry point function to validate user
 * @param {{email: string, password: string, username: string, role: "admin" | "user"}} user
 */
function validateUser(user) {
	validateUsername(user.username);
	validateUserPassword(user.password);
	validateUserEmail(user.email);
	validateUserRole(user.role);
}

module.exports = {
	validateUsername,
	validateUserPassword,
	validateUserEmail,
	validateUserRole,
	validateUser,
};
