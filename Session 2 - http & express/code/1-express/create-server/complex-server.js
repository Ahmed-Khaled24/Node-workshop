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

// Create a server
const express = require("express");
const app = express();

app.use(express.json());

// Handle routing
app.get("/users", (req, res) => {
	res.json(database.users);
});

app.post("/users", (req, res) => {
	const { name, email } = req.body;
	database.users.push({
		id: database.users.length + 1,
		name,
		email,
	});
	res.status(201).json(`user ${name} added`);
});

app.get("/items", (req, res) => {
	res.json(database.items);
});

app.post("/items", (req, res) => {
	const { name, price } = req.body;
	database.items.push({
		id: database.items.length + 1,
		name,
		price,
	});
	res.status(201).json(`item ${name} added`);
});

// Start the server
app.listen(5000, () => console.log("Server ready on port 5000"));


