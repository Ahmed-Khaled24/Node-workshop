let line = "lorem ipsum dolor sit amet consectetur adipisicing elit.";

const fs = require("fs");

fs.writeFile(`${__dirname}/ex1.txt`, line, (err) => {
	if (err) {
		console.log(err);
	}
});
