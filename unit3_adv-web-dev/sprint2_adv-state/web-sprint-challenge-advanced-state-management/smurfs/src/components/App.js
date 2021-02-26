import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import {
	Container,
	Row,
	Col,
	Form,
	Button,
	CardDeck,
	Card,
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { getInitialData, postSmurf } from "../store";

const initForm = {
	name: "",
	age: "",
	height: "",
};

function App(props) {
	const { smurfs, getInitialData, postSmurf } = props;
	const [form, setForm] = useState(initForm);

	useEffect(() => {
		getInitialData();
	}, []);

	const handleChange = (e) => {
		const { name, value } = e.target;
		setForm({
			...form,
			[name]: value,
		});
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		postSmurf(form);
		setForm(initForm);
	};

	return (
		<Container>
			<Form onSubmit={handleSubmit}>
				<Form.Group controlId="smurfName">
					<Form.Label>Name</Form.Label>
					<Form.Control
						name="name"
						value={form.name}
						onChange={handleChange}
					></Form.Control>
				</Form.Group>
				<Form.Group controlId="smurfAge">
					<Form.Label>Age</Form.Label>
					<Form.Control
						name="age"
						value={form.age}
						type="number"
						onChange={handleChange}
					></Form.Control>
				</Form.Group>
				<Form.Group controlId="smurfHeight">
					<Form.Label>Height</Form.Label>
					<Form.Control
						name="height"
						value={form.height}
						onChange={handleChange}
					></Form.Control>
				</Form.Group>
				<Button type="submit">Submit</Button>
			</Form>
			<Row className="my-4">
				<CardDeck>
					{smurfs.map((smurf) => (
						<Card>
							<Card.Body>
								<Card.Title>{smurf.name}</Card.Title>
								<Card.Subtitle>
									Age: {smurf.age} / Height: {smurf.height}
								</Card.Subtitle>
							</Card.Body>
						</Card>
					))}
				</CardDeck>
			</Row>
		</Container>
	);
}

const mapState = (state) => {
	return {
		smurfs: state,
	};
};

const mapDispatch = {
	getInitialData,
	postSmurf,
};

export default connect(mapState, mapDispatch)(App);
