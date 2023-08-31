// Create the server
const express = require("express");
const app = express();

// Handle routing and use middlewares
app.use(express.static(`${__dirname}/../public`));

app.post("/before", (request, response) => {
	console.log(request.body);
	response.send(request.body);
});

app.use(express.json());
app.use(express.text());

app.get("/", (request, response) => {
	console.log(request.body);
	response.send();
});

// Start the server
app.listen(5000, () => console.log("Server ready on port 5000"));
