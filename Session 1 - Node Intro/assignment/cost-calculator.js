const fs = require("fs/promises");

async function costCalculator(filePath) {
	let data = await readFileAsync(filePath);
	console.log(data);
}

function readFileAsync(filePath) {
	return new Promise((resolve, reject) => {
		fs.readFile(filePath, "utf8", (err, data) => {
			if (err) {
				reject(err);
				return;
			}
			resolve(data);
		});
	});
}

module.exports = {
	costCalculator,
};
