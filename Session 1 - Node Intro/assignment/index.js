const { costCalculator } = require("./cost-calculator");

// Run this file to see the result of your code
// and don't touch anything in this file except for the filePath variable

(async function () {
	// TODO: change the file path for testing
	let filePath = "ziad.json";
	await costCalculator(filePath);
})();
