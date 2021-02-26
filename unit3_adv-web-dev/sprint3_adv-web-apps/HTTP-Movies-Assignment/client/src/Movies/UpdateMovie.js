import React, { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import axios from "axios";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

function UpdateMovie() {
	const [form, setForm] = useState();
	const params = useParams();
	const history = useHistory();

	const fetchMovie = (id) => {
		axios
			.get(`http://localhost:5000/api/movies/${params.id}`)
			.then((res) => setForm(res.data))
			.catch((err) => console.error(err));
	};

	useEffect(() => {
		fetchMovie(params.id);
	}, [params.id]);

	const handleChange = (e) => {
		const { name, value } = e.target;
		setForm({ ...form, [name]: value });
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		axios
			.put(`http://localhost:5000/api/movies/${params.id}`, form)
			.then((res) => history.push(`/movies/${params.id}`))
			.catch((err) => console.error(err));
	};

	return (
		<div>
			{form ? (
				<Form onSubmit={handleSubmit}>
					<Form.Group controlId="title">
						<Form.Label>Title</Form.Label>
						<Form.Control
							name="title"
							value={form.title}
							onChange={handleChange}
						/>
					</Form.Group>
					<Form.Group controlId="director">
						<Form.Label>Director</Form.Label>
						<Form.Control
							name="director"
							value={form.director}
							onChange={handleChange}
						/>
					</Form.Group>
					<Form.Group controlId="metascore">
						<Form.Label>Metascore</Form.Label>
						<Form.Control
							name="metascore"
							type="number"
							value={form.metascore}
							onChange={handleChange}
						/>
					</Form.Group>
					<Button type="submit">Submit</Button>
				</Form>
			) : (
				""
			)}
		</div>
	);
}

export default UpdateMovie;
