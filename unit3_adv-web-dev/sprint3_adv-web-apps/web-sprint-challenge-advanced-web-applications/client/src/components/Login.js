import React, { useState } from "react";
import axios from "axios";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const initForm = { username: "Lambda School", password: "i<3Lambd4" };

const Login = (props) => {
	// make a post request to retrieve a token from the api
	// when you have handled the token, navigate to the BubblePage route

	const { setToken } = props;

	const [form, setForm] = useState(initForm);

	const handleChange = (e) => {
		setForm({ ...form, [e.target.name]: e.target.value });
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		axios
			.post("http://localhost:5000/api/login", {
				username: form.username,
				password: form.password,
			})
			.then((res) => {
				setToken(res.data.payload);
				localStorage.setItem("token", res.data.payload);
			})
			.catch((err) => console.error(err));
	};

	return (
		<Container>
			<Form onSubmit={handleSubmit}>
				<Form.Group>
					<Form.Label>Username</Form.Label>
					<Form.Control
						name="username"
						value={form.username}
						onChange={handleChange}
					/>
				</Form.Group>
				<Form.Group>
					<Form.Label>Password</Form.Label>
					<Form.Control
						name="password"
						value={form.password}
						type="password"
						onChange={handleChange}
					/>
				</Form.Group>
				<Button type="submit">Login</Button>
			</Form>
		</Container>
	);
};

export default Login;
