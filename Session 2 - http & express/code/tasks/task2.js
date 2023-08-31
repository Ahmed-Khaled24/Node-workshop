const express = require("express");

const app = express();

app.use(express.text());
app.use(express.json());

app.get("users/:userId", (req, res) => {
	const { userId } = req.params;
	res.send(`here is ${userId}`);
});

app.post("/admins", (req, res) => {
	const { name, password } = JSON.parse(req.body);
	console.log(req.body);
	res.send(`admin ${name} added`);
});

app.delete("/posts/:postId", (req, res) => {
	const { postId } = req.params;
	res.send(`post ${postId} deleted`);
});

app.listen(5000, () => console.log("server is listening on port 5000"));
