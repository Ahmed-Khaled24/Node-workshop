const { validateUsername } = require("../../utils/userValidation");

describe("Username validation", () => {
	test("If username is not a string, throw an error", () => {
		expect(() => validateUsername(123)).toThrow();
	});

	test("If username is less than 6 characters, throw an error", () => {
		expect(() => {
			validateUsername("12345");
		}).toThrow();
	});

	test("If username is more than 20 characters, throw an error", () => {
		expect(() => {
			validateUsername("123456789012345678901");
		}).toThrow();
	});

	test("If username contains non-alphanumeric characters, throw an error", () => {
		expect(() => {
			validateUsername("asdf**()");
		}).toThrow();
	});

	test("If username is valid, do not throw an error", () => {
		expect(() => {
			validateUsername("asdf1234");
		}).not.toThrow();
	});
});

describe("User password validation ", () => {
	test(" if password less that 8 chars , throw an error", () => {
		expect(() => {
			validateUserPassword("1234");
		}).toThrow();
	});

	test(" if password More that 10 chars , throw an error", () => {
		expect(() => {
			validateUserPassword(12345678911);
		}).toThrow();
	});
});

// TODO: password validation

// TODO: email validation

// TODO: role validation
