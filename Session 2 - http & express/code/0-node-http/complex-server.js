const database = {
	users: [
		{
			id: "1",
			name: "John",
			email: "John@mail.com",
		},
		{
			id: "2",
			name: "Sally",
			email: "Sally@mail.com",
		},
	],
	items: [
		{
			id: "1",
			name: "Item 1",
			price: 100,
		},
		{
			id: "2",
			name: "Item 2",
			price: 200,
		},
	],
};


const http = require("http");

const server = http.createServer();

server.on('request', (request, response) => {
	const { url, method } = request;

	if (url === "/users") {
		// Handle requests for /users endpoint
		if (method === "GET") {
			response.writeHead(200, { "Content-type": "application/json" });
			response.write(JSON.stringify(database.users));
			return response.end();
		} else if (method === "POST") {
			let body = "";
			request.on("data", (chunk) => {
				body += chunk;
			});
			request.on("end", () => {
				const { name, email } = JSON.parse(body);
				database.users.push({
					id: database.users.length + 1,
					name,
					email,
				});
				response.writeHead(201, { "Content-type": "application/json" });
				response.write(`user ${name} added`);
				response.end();
			});
		}
	} else if (url === "/items") {
		// Handle requests for /items endpoint
		if (method === "GET") {
			response.writeHead(200, { "Content-type": "application/json" });
			response.write(JSON.stringify(database.items));
			response.end();
		} else if (method === "POST") {
			let body = "";
			request.on("data", (chunk) => {
				body += chunk;
			});
			request.on("end", () => {
				const { name, price } = JSON.parse(body);
				database.items.push({
					id: database.items.length + 1,
					name,
					price,
				});
				response.writeHead(201, { "Content-type": "application/json" });
				response.write(`item ${name} added`);
				response.end();
			});
		}
	}
}
)

server.listen(5000, () => {
	console.log("Server listening on port 5000");
});