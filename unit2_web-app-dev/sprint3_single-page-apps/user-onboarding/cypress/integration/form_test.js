describe("User Onboarding", () => {
	beforeEach(() => {
		cy.visit("http://localhost:3000");
	});

	//	Helpers
	const name = () => cy.get('input[name="name"]');
	const email = () => cy.get('input[name="email"]');
	const password = () => cy.get('input[name="password"]');
	const tos = () => cy.get('input[name="tos"]');
	const button = () => cy.get("button");

	it("Form elements render", () => {
		name().should("exist");
		email().should("exist");
		password().should("exist");
		tos().should("exist");
		button().should("exist");
	});

	describe("MVP", () => {
		it("Name", () => {
			name()
				.should("have.value", "")
				.type("Phineas Welles")
				.should("have.value", "Phineas Welles");
		});

		it("Email", () => {
			email()
				.should("have.value", "")
				.type("phineas.welles@halcyon.com")
				.should("have.value", "phineas.welles@halcyon.com");
		});

		it("Password", () => {
			password()
				.should("have.value", "")
				.type("groundbreakerhope")
				.should("have.value", "groundbreakerhope");
		});

		it("TOS Checkbox", () => {
			tos().should("not.be.checked").click().should("be.checked");
		});

		it("Submit", () => {
			name().type("Phineas Welles");
			email().type("phineas.welles@halcyon.com");
			password().type("groundbreakerhope");
			tos().click();

			button().should("not.be.disabled").click().should("be.disabled");

			cy.get(".user").should("exist");
		});

		it("Form Validation - does not agree to TOS", () => {
			name().type("Phineas Welles");
			email().type("phineas.welles@halcyon.com");
			password().type("groundbreakerhope");

			button().should("be.disabled");

			cy.get(".user").should("not.exist");
		});
	});
});
