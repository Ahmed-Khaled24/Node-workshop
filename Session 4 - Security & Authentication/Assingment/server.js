require("dotenv").config();
require("./services/passport");
const http = require("http");
const app = require("./app");
const { connectMongoDB } = require("./services/mongodb");

(async () => {
	await connectMongoDB();
	const server = http.createServer(app);
	const PORT = process.env.PORT || 3000;
	server.listen(PORT, () => {
		console.log(`Server listening on port ${PORT}`);
	});
})();
