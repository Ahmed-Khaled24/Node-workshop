function validatePassword(request, response, next) {
	let { password } = request.body;
	if (password.length < 8) {
		return response.status(400).send("invalid password - must be at least 8 characters");
	} else {
		next();
	}
}

function validateEmail(request, response, next) {
	let { email } = request.body;
	if (!email.includes("@")) {
		response.status(400).send("invalid email - must contain @");
	} else {
		next();
	}
}

// Create the server
const express = require("express");
const app = express();

// Use middlewares
app.use(express.json());


// Handle routing
app.post("/signup", validateEmail, validatePassword, (request, response) => {
	response.status(200).json({ message: "signup successfully" });
});

app.get("/posts", (request, response) => {
	response.status(200).json({ message: "posts" });
});

// Start the server
app.listen(5000, () => console.log("Server ready on port 5000"));
