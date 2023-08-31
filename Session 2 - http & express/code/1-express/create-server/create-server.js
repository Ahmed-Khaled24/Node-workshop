// Create the server
const express = require("express");
const app = express();

// Handle routing
app.post("/", (request, response) => {
	response.json("Hello World");
});

// Start the server
app.listen(5000, () => console.log("Server ready on port 5000"));
