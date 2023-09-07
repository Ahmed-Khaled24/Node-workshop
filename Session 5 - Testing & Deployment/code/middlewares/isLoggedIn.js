module.exports = function isLoggedIn(req, res, next) {
	if (req.isAuthenticated()) {
		return next();
	}
	res.status(401).json({
		status: "failure",
		data: "Unauthenticated you must login",
	});
};
