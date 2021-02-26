import React, { useReducer, useState } from "react";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import shortid from "shortid";
import TaskList from "./TaskList";
import { reducer, init } from "./reducer";

const newAction = (value) => {
	return { type: "NEW", payload: value };
};

const completeAction = (value) => {
	return { type: "COMPLETE", payload: value };
};

const clearAction = () => {
	return { type: "CLEAR" };
};

function App() {
	const [state, dispatch] = useReducer(reducer, init);
	const [input, setInput] = useState("");

	const handleChange = (e) => {
		setInput(e.target.value);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		dispatch(
			newAction({ item: input, completed: false, id: shortid.generate() })
		);
		setInput("");
	};

	const handleComplete = (value) => {
		dispatch(completeAction(value));
	};

	const handleClear = () => {
		dispatch(clearAction());
	};

	return (
		<Container>
			<Form onSubmit={handleSubmit}>
				<Form.Group controlId="newTodo">
					<Form.Label>New Todo</Form.Label>
					<Form.Control
						type="text"
						placeholder="New task"
						value={input}
						onChange={handleChange}
					/>
				</Form.Group>
				<Button type="submit">Add</Button>
				<Button onClick={handleClear}>Clear Finished Tasks</Button>
			</Form>
			<TaskList list={state} complete={handleComplete} />
		</Container>
	);
}

export default App;
