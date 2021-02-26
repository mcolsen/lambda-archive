import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import * as yup from "yup";

function Form(props) {
	const { db, setDb } = props;

	const toppingList = ["pepperoni", "sausage", "olives", "green pepper"];

	function initToppings() {
		let obj = {};
		toppingList.forEach((topping) => {
			obj[topping] = false;
		});
		return obj;
	}

	const initPizza = {
		size: "s",
		customer: "",
		toppings: initToppings(),
		special: "",
	};

	const schema = yup.string().required().min(2);

	const [pizza, setPizza] = useState(initPizza);
	const [submittable, setSubmittable] = useState(false);

	const handleChange = (e) => {
		setPizza({
			...pizza,
			[e.target.name]: e.target.value,
		});
	};

	const handleTopping = (e) => {
		let curToppings = pizza.toppings;
		curToppings = {
			...curToppings,
			[e.target.name]: e.target.checked,
		};

		setPizza({
			...pizza,
			toppings: curToppings,
		});
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		axios
			.post("https://reqres.in/api/pizza", pizza)
			.then((res) => setDb(res.data))
			.catch((err) => console.log(err));
	};

	useEffect(() => {
		schema.isValid(pizza.customer).then((valid) => {
			setSubmittable(valid);
		});
	}, [pizza]);

	return (
		<form onSubmit={handleSubmit}>
			<label>
				Size
				<select name="size" value={pizza.size} onChange={handleChange}>
					<option value="s">Small</option>
					<option value="m">Medium</option>
					<option value="l">Large</option>
				</select>
			</label>

			{toppingList.map((topping) => {
				return (
					<label>
						{topping}
						<input
							name={topping}
							type="checkbox"
							onChange={handleTopping}
							value={pizza.toppings[topping]}
							checked={pizza.toppings[topping]}
						/>
					</label>
				);
			})}

			<label>
				Customer name
				<input
					name="customer"
					value={pizza.customer}
					onChange={handleChange}
					minLength="2"
				/>
			</label>
			<label>
				Special instructions
				<input
					name="special"
					value={pizza.special}
					onChange={handleChange}
					minLength="2"
				/>
			</label>
			<Link to="/confirm">
				<button disabled={!submittable}>Submit</button>
			</Link>
		</form>
	);
}

export default Form;
