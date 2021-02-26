import { createSlice, configureStore } from "@reduxjs/toolkit";
import axios from "axios";

const slice = createSlice({
	name: "smurfs",
	initialState: [],
	reducers: {
		setState: (state, action) => (state = action.payload),
	},
});

export const store = configureStore({
	reducer: slice.reducer,
});

const { setState } = slice.actions;
export const getInitialData = () => async (dispatch) => {
	axios
		.get("http://localhost:3333/smurfs")
		.then((res) => dispatch(setState(res.data)))
		.catch((err) => console.error(err));
};

export const postSmurf = (smurf) => async (dispatch) => {
	axios
		.post("http://localhost:3333/smurfs", {
			name: smurf.name,
			age: Number(smurf.age),
			height: smurf.height,
		})
		.then((res) => {
			dispatch(setState(res.data));
		})
		.catch((err) => console.error(err));
};
