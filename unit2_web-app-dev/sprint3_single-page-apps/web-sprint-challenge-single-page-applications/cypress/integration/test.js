/* eslint-disable no-undef */
describe("sprint challenge", () => {
	beforeEach(() => {
		cy.visit("http://localhost:3000/pizza");
	});

	const customer = () => cy.get('input[name="customer"]');
	const pepperoni = () => cy.get('input[name="pepperoni"]');
	const sausage = () => cy.get('input[name="sausage"]');
	const submit = () => cy.get("button");

	it("type name", () => {
		customer()
			.should("have.value", "")
			.type("John Doe")
			.should("have.value", "John Doe");
	});

	it("toppings", () => {
		pepperoni().should("not.be.checked").click().should("be.checked");
		sausage().should("not.be.checked").click().should("be.checked");
	});

	it("button works", () => {
		customer()
			.should("have.value", "")
			.type("John Doe")
			.should("have.value", "John Doe");
		submit().should("not.be.disabled").click();
	});
});
