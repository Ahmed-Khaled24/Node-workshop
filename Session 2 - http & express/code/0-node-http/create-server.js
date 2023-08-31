const http = require("http");

const server = http.createServer();

server.on("request", (request, response) => {
	response.write("hello");
	response.end();
});

server.listen(5000, () => {
	console.log("Server listening on port 5000");
});
