const request = require("supertest");
const server = require("./server");

describe("POST /api/auth/register", () => {
	it("Status 400 if username is not string", async () => {
		const res = await request(server)
			.post("/api/auth/register")
			.send({ username: true, password: "testpassword" });
		expect(res.status).toBe(400);
	});
	it("Status 400 if username is empty string", async () => {
		const res = await request(server)
			.post("/api/auth/register")
			.send({ username: "", password: "testpassword" });
		expect(res.status).toBe(400);
	});
});

describe("POST /api/auth/login", () => {
	it("Status 400 if password is not string", async () => {
		const res = await request(server)
			.post("/api/auth/login")
			.send({ username: "testusername", password: true });
		expect(res.status).toBe(400);
	});
	it("Status 400 if password is empty string", async () => {
		const res = await request(server)
			.post("/api/auth/login")
			.send({ username: "testusername", password: "" });
		expect(res.status).toBe(400);
	});
});

describe("GET /api/jokes", () => {
	it("Status 401 without token", async () => {
		const res = await request(server).get("/api/jokes");
		expect(res.status).toBe(401);
	});
	it("Status 200 with token", async () => {
		const jwt = require("jsonwebtoken");
		const secret = require("./secret");

		const token = jwt.sign({ subject: "jest" }, secret);

		const res = await request(server)
			.get("/api/jokes")
			.set("authorization", token);
		expect(res.status).toBe(200);
	});
});
