require("dotenv").config();
require("./services/passport-jwt");
const http = require("http");
const app = require("./app");
const { connectMongoDB } = require("./services/mongodb");

(async () => {
	const server = http.createServer(app);
	await connectMongoDB();
	let PORT = process.env.PORT ?? 3000;
	server.listen(PORT, () => {
		console.log(`Server running on port ${PORT}`);
	});
})();
