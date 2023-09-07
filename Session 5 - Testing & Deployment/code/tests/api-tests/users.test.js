require("dotenv").config();
require("../../services/passport-jwt");
const { connectMongoDB, disconnectMongoDB, getDbCollection } = require("../../services/mongodb");
const superTest = require("supertest");
const app = require("../../app");
const { dbAddNewUser } = require("../../models/users.model");
const issueJWT = require("../../utils/issueJWT");

let token = null;

beforeAll(async () => {
	await connectMongoDB();
	const validUser = {
		username: "test0user",
		password: "test0p@Ssword",
		email: "test@user.com",
		role: "user",
	};
	const { insertedId } = await dbAddNewUser(validUser);
	validUser._id = insertedId;
	token = issueJWT(validUser);
});

afterAll(async () => {
	const userCollection = getDbCollection("users");
	await userCollection.deleteMany({});
	await disconnectMongoDB();
});

describe("POST /users", () => {
	test("post a valid user", async () => {
		const validUser = {
			username: "test0user",
			password: "test0p@Ssword",
			email: "test@user.com",
			role: "user",
		};
		const response = await superTest(app).post("/users").send(validUser);
		expect(response.status).toBe(201);
	});

	test("post invalid user", async () => {
		const invalidUser = {
			username: "test user",
			password: "test0p@Ssword",
			email: "test@user.com",
			role: "user",
		};
		const response = await superTest(app).post("/users").send(invalidUser);
		expect(response.status).toBe(400);
	});
});

describe("add secret", () => {
	test("add secret with valid token", async () => {
		const secret = {
			title: "test secret",
			description: "test secret description",
		};
		const response = await superTest(app)
			.post("/secrets")
			.send(secret)
			.set("Authorization", `Bearer ${token}`);

		expect(response.status).toBe(201);
	});
});

describe("get All secrets", () => {
	test("get all secrets with valid token", async () => {
		const response = await superTest(app)
			.get("/secrets")
			.set("Authorization", `Bearer ${token}`);
		expect(response.status).toBe(200);
	});
});
