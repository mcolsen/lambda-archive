const request = require("supertest");
const server = require("./server");
const {
	addBunny,
	scrubBunnies,
	getNewestBunny,
	getBunniesLength,
} = require("./data");

const pecan = {
	name: "Pecan",
	age: 7,
	breed: "Polish",
};

beforeEach(() => {
	scrubBunnies();
});

describe("GET /", () => {
	it("Status 200", async () => {
		const res = await request(server).get("/");
		expect(res.status).toBe(200);
	});
	it("Returns empty array if no bunnies", async () => {
		const res = await request(server).get("/");
		expect(res.body).toHaveLength(0);
	});
	it("Returns array with bunnies", async () => {
		addBunny(pecan);
		const res = await request(server).get("/");
		expect(res.body).toHaveLength(1);
		expect(res.body[0].name).toEqual("Pecan");
		expect(res.body[0].age).toEqual(7);
		expect(res.body[0].breed).toEqual("Polish");
	});
});

describe("POST /", () => {
	it("Status 500 if missing name field", async () => {
		const res = await request(server)
			.post("/")
			.send({ age: 7, breed: "Polish" });
		expect(res.status).toBe(500);
	});
	it("Creates and returns new bunny", async () => {
		const res = await request(server).post("/").send(pecan);
		expect(res.status).toBe(200);
		expect(getNewestBunny()).toEqual(pecan);
		expect(res.body).toEqual(pecan);
	});
});

describe("DELETE /:index", () => {
	it("Status 404 if index does not exist", async () => {
		const res = await request(server).delete("/0");
		expect(res.status).toBe(404);
	});
	it("Deletes bunny", async () => {
		addBunny(pecan);
		expect(getBunniesLength()).toBe(1);
		const res = await request(server).delete("/0");
		expect(res.status).toBe(200);
		expect(getBunniesLength()).toBe(0);
	});
});

describe("DELETE /", () => {});
