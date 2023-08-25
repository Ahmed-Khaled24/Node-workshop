const { costCalculator } = require("./cost-calculator");

describe("Cost Calculator", () => {
	test("Test for mohamed file", () => {
		let filePath = "mohamed.json";
		let result = costCalculator(filePath);
		expect(result).toEqual({ name: "Mohamed", cost: 62.5 });
	});
	test("Test for yara file", () => {
		let filePath = "yara.json";
		let result = costCalculator(filePath);
		expect(result).toEqual({ name: "Yara", cost: 40.625 });
	});
	test("Test for ziad file", () => {
		let filePath = "ziad.json";
		let result = costCalculator(filePath);
		expect(result).toEqual({ name: "Ziad", cost: 37.5 });
	});
});
