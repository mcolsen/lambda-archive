// write your custom hook here to control your checkout form
import { useState } from "react";

export const useForm = () => {
	const [values, setValues] = useState({
		firstName: "",
		lastName: "",
		address: "",
		city: "",
		state: "",
		zip: "",
	});

	const update = (key, value) => {
		setValues({ ...values, [key]: value });
	};

	return [values, update];
};
