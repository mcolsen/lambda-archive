import React, { useState, useEffect } from "react";
import * as yup from "yup";

const formSchema = yup.object().shape({
	name: yup.string().required("Required"),
	email: yup.string().email("Invalid email address").required("Required"),
	password: yup.string().required("Required"),
	tos: yup.boolean().oneOf([true], "Required"),
});

function Form(props) {
	const { values, update, submit } = props;

	const [errors, setErrors] = useState({
		name: "",
		email: "",
		password: "",
		tos: "",
	});

	const [buttonOn, setButtonOn] = useState(false);

	useEffect(() => {
		formSchema.isValid(values).then((valid) => {
			setButtonOn(valid);
		});
	}, [values]);

	const handleChange = (e) => {
		const { name, value, type, checked } = e.target;
		if (type === "checkbox") {
			update(name, checked);
		} else {
			update(name, value);
		}
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		submit();
	};

	return (
		<form onSubmit={handleSubmit}>
			<label>
				Name
				<input
					name="name"
					type="text"
					onChange={handleChange}
					value={values.name}
				/>
			</label>
			<label>
				Email
				<input
					name="email"
					type="text"
					onChange={handleChange}
					value={values.email}
				/>
			</label>
			<label>
				Password
				<input
					name="password"
					type="password"
					onChange={handleChange}
					value={values.password}
				/>
			</label>
			<label>
				I have read and agree to the Terms of Service
				<input
					name="tos"
					type="checkbox"
					onChange={handleChange}
					value={values.tos}
					checked={values.tos}
				/>
			</label>
			<button disabled={!buttonOn}>Submit</button>
		</form>
	);
}

export default Form;
