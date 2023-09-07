const { validateUser } = require("../utils/userValidation");

function validateUserData(req, res, next) {
	const user = req.body;
	try {
		validateUser(user);
		next();
	} catch (error) {
		res.status(400).json({
			status: "failure",
			data: error.message,
		});
	}
}

module.exports = validateUserData;
