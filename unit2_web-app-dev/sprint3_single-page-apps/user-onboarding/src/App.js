import React, { useState } from "react";
import axios from "axios";
import * as yup from "yup";

import Form from "./components/Form";
import Users from "./components/Users";

const initForm = {
	name: "",
	email: "",
	password: "",
	tos: false,
};

function App() {
	const [users, setUsers] = useState([]);
	const [formValues, setFormValues] = useState(initForm);

	const update = (name, value) => {
		setFormValues({
			...formValues,
			[name]: value,
		});
	};

	const submit = () => {
		const newUser = {
			name: formValues.name,
			email: formValues.email,
			password: formValues.password,
			tos: formValues.tos,
		};

		axios
			.post("https://reqres.in/api/users", newUser)
			.then((res) => {
				console.log(res.data);
				setUsers([...users, res.data]);
			})
			.catch((err) => {
				console.log(err);
			});

		setFormValues(initForm);
	};

	return (
		<div>
			<Form values={formValues} update={update} submit={submit} />
			<Users users={users} />
		</div>
	);
}

export default App;
