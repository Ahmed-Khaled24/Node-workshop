const fs = require("fs");

fs.readFile(`${__dirname}/example.txt`, "utf8", (err, data) => {
	if (err) {
		console.error(err);
		return;
	}
	console.log(data);
});


const fs = require("fs/promises");
fs.readFile("example.txt", "utf8")
	.then((data) => console.log(data))
	.catch((err) => console.error(err));

