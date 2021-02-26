import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", async () => {
	render(<CheckoutForm />);

	const header = await screen.findByText("Checkout Form");
	expect(header).toBeTruthy();
});

test("form shows success message on submit with form details", async () => {
	render(<CheckoutForm />);
	const firstName = screen.getByLabelText("First Name:");
	const lastName = screen.getByLabelText("Last Name:");
	const address = screen.getByLabelText("Address:");
	const city = screen.getByLabelText("City:");
	const state = screen.getByLabelText("State:");
	const zip = screen.getByLabelText("Zip:");

	fireEvent.change(firstName, { target: { value: "John", name: firstName } });
	fireEvent.change(lastName, { target: { value: "Doe", name: lastName } });
	fireEvent.change(address, {
		target: { value: "123 Fake Address", name: address },
	});
	fireEvent.change(city, { target: { value: "Salt Lake City", name: city } });
	fireEvent.change(state, { target: { value: "UT", name: state } });
	fireEvent.change(zip, { target: { value: "84100", name: zip } });

	const submit = screen.getByRole("button");
	fireEvent.click(submit);

	const success = await screen.getByTestId("successMessage");
	expect(success).toBeTruthy();
});
