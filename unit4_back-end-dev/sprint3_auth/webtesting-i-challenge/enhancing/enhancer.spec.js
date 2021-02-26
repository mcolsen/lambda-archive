const enhancer = require("./enhancer.js");

const newTestItem = (enhancement, durability) => {
	if (
		typeof enhancement === "number" &&
		enhancement >= 0 &&
		enhancement <= 20 &&
		typeof durability === "number" &&
		durability >= 0 &&
		durability <= 100
	) {
		return {
			name: "Test Item",
			enhancement: enhancement,
			durability: durability,
		};
	} else {
		return false;
	}
};

describe("Sanity Check", () => {
	it("2+2=4", () => {
		expect(2 + 2).toBe(4);
	});
});

describe("repair(item)", () => {
	it("Returns new item", () => {
		const item = newTestItem(10, 10);
		expect(item).not.toBe(enhancer.repair(item));
	});
	it("Durability set to 100", () => {
		const item = newTestItem(10, 10);
		const repaired = enhancer.repair(item);
		expect(repaired).toHaveProperty("durability");
		expect(repaired.durability).toEqual(100);
	});
});

describe("success(item)", () => {
	it("Returns new item", () => {
		const item = newTestItem(10, 10);
		expect(item).not.toBe(enhancer.success(item));
	});
	it("Increments enhancement", () => {
		const item = newTestItem(10, 10);
		const enhanced = enhancer.success(item);
		expect(enhanced).toHaveProperty("enhancement");
		expect(enhanced.enhancement).toEqual(item.enhancement + 1);
	});
	it("Does not increment when enhancement equals 20", () => {
		const item = newTestItem(20, 10);
		const enhanced = enhancer.success(item);
		expect(enhanced).toHaveProperty("enhancement");
		expect(enhanced.enhancement).toEqual(20);
	});
	it("Does not change durability", () => {
		const item = newTestItem(10, 10);
		const enhanced = enhancer.success(item);
		expect(enhanced).toHaveProperty("durability");
		expect(enhanced.durability).toEqual(item.durability);
	});
});

describe("faile(item)", () => {
	it("Returns new item", () => {
		const item = newTestItem(10, 10);
		expect(item).not.toBe(enhancer.fail(item));
	});
	it("Decrease durability by 5 when enhancement is less than 15", () => {
		const item = newTestItem(10, 10);
		const failed = enhancer.fail(item);
		expect(failed).toHaveProperty("enhancement");
		expect(failed.enhancement).toBeLessThan(15);
		expect(failed).toHaveProperty("durability");
		expect(failed.durability).toEqual(item.durability - 5);
	});
	it("Decrease durability by 10 when enhancement is greater than or equal to 15", () => {
		const item = newTestItem(15, 10);
		const failed = enhancer.fail(item);
		expect(failed).toHaveProperty("enhancement");
		expect(failed.enhancement).toBeGreaterThanOrEqual(15);
		expect(failed).toHaveProperty("durability");
		expect(failed.durability).toEqual(item.durability - 10);
	});
	it("Decrease enhancement by 1 when enhancement is greater than 16", () => {
		const item = newTestItem(20, 10);
		const failed = enhancer.fail(item);
		expect(failed).toHaveProperty("enhancement");
		expect(item.enhancement).toBeGreaterThan(16);
		expect(failed.enhancement).toEqual(item.enhancement - 1);
	});
});
