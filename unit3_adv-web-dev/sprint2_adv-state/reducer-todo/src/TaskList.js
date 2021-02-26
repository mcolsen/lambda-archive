import React from "react";
import CardDeck from "react-bootstrap/CardDeck";
import Card from "react-bootstrap/Card";

function TaskList(props) {
	const { list, complete } = props;

	const handleCheck = (e) => {
		complete(e.target.name);
	};

	const cardBorder = (completed) => {
		if (completed) {
			return "success";
		} else {
			return "warning";
		}
	};

	return (
		<CardDeck>
			{list.map((todo) => (
				<Card border={cardBorder(todo.completed)}>
					<Card.Body>
						<Card.Text>{todo.item}</Card.Text>
						<span>Finish </span>
						<input
							name={todo.id}
							type="checkbox"
							checked={todo.completed}
							onClick={handleCheck}
						/>
					</Card.Body>
				</Card>
			))}
		</CardDeck>
	);
}

export default TaskList;
