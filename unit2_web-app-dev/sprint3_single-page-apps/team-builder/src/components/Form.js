import React, { useState } from "react";
import { types } from "./data";

function Form(props) {
	const { values, update, submit } = props;

	const onChange = (e) => {
		const { name, value } = e.target;
		update(name, value);
	};

	const onSubmit = (e) => {
		e.preventDefault();
		submit();
	};

	return (
		<form onSubmit={onSubmit}>
			<label>
				Name
				<input
					name="name"
					type="text"
					onChange={onChange}
					value={values.name}
					placeholder="Required"
					maxLength="15"
				/>
				{/* I'm 99% sure there are no Pokemon species names longer than 15 characters, at least in English. Crabominable held the record at 12 as of USUM, but I haven't checked SWSH */}
			</label>

			<label>
				Pokédex #
				<input
					name="dexNo"
					type="number"
					onChange={onChange}
					value={values.dexNo}
					min="1"
					max="893"
				/>
				{/* Zarude currently occupies the final position on the National Pokedex at #893 */}
			</label>

			<label>
				Level
				<input
					name="level"
					type="number"
					onChange={onChange}
					value={values.level}
					min="1"
					max="100"
				/>
			</label>

			<label>
				Gender
				<select name="gender" value={values.gender} onChange={onChange}>
					<option value=""></option>
					<option value="male">Male</option>
					<option value="female">Female</option>
					<option value="genderless">Genderless</option>
					{/* Most Pokemon species are only male or female, but over 100 are neither and are termed "genderless" */}
				</select>
			</label>

			<label>
				Type 1
				<select name="type1" value={values.type1} onChange={onChange}>
					<option value=""></option>
					{types.map((type) => {
						return <option value={type}>{type}</option>;
					})}
				</select>
			</label>

			<label>
				Type 2
				<select name="type2" value={values.type2} onChange={onChange}>
					<option value=""></option>
					<option value="">N/A - Monotype</option> 
					{types.map((type) => {
						return <option value={type}>{type}</option>;
					})}
				</select>
			</label>

			<label>
				Move 1
				<input
					name="move1"
					type="text"
					onChange={onChange}
					value={values.move1}
					maxLength="30"
				/>
			</label>
			<label>
				Move 2
				<input
					name="move2"
					type="text"
					onChange={onChange}
					value={values.move2}
					maxLength="30"
				/>
			</label>
			<label>
				Move 3
				<input
					name="move3"
					type="text"
					onChange={onChange}
					value={values.move3}
					maxLength="30"
				/>
			</label>
			<label>
				Move 4
				<input
					name="move4"
					type="text"
					onChange={onChange}
					value={values.move4}
					maxLength="30"
				/>
			</label>
			<button>Submit</button>
		</form>
	);
}

export default Form;
