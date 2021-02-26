import React, { useState } from "react";
import logo from "./logo.svg";
import { red } from "./components/data";
import Team from "./components/Team";
import Form from "./components/Form";

const initFormValues = {
	name: "",
	dexNo: "",
	level: "",
	gender: "",
	type1: "",
	type2: "",
	move1: "",
	move2: "",
	move3: "",
	move4: "",
};

function App() {
	const [team, setTeam] = useState(red);
	const [formValues, setFormValues] = useState(initFormValues);

	const updateForm = (name, value) => {
		setFormValues({
			...formValues,
			[name]: value,
		});
	};

	const submitForm = () => {
		let newPokemon = {
			name: formValues.name,
			dexNo: formValues.dexNo,
			level: formValues.level,
			gender: formValues.gender,
			type1: formValues.type1,
			type2: formValues.type2,
			moves: [
				formValues.move1,
				formValues.move2,
				formValues.move3,
				formValues.move4,
			],
		};

		if (!newPokemon.name) {
			return;
		}

		setTeam([...team, newPokemon]);
		setFormValues(initFormValues);
	};

	return (
		<div className="app">
			<Team team={team} />
			<Form values={formValues} update={updateForm} submit={submitForm} />
		</div>
	);
}

export default App;
