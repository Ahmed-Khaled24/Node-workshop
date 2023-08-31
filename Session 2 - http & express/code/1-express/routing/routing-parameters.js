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

// Create the server
const express = require("express");
const app = express();

app.use(express.json());

// Routing parameters
app.get("/users/:userId", (req, res) => {
	const { userId } = req.params;
	const user = database.users.find((user) => user.id === userId);
	if (user) {
		res.json(user);
	} else {
		res.status(404).json("User not found");
	}
});

app.get("/items/:itemId", (req, res) => {
	const { itemId } = req.params;
	const item = database.items.find((item) => item.id === itemId);
	if (item) {
		res.json(item);
	} else {
		res.status(404).json("Item not found");
	}
});

// Start the server
app.listen(5000, () => console.log("Server ready on port 5000"));
