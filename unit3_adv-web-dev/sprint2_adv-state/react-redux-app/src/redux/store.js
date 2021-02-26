import { createSlice, configureStore } from "@reduxjs/toolkit";
import axios from "axios";

const slice = createSlice({
	name: "dex",
	initialState: {
		initLoading: false,
		getError: false,
		dex: [],
	},
	reducers: {
		getInitStart: (state, action) => {
			state.initLoading = true;
		},
		getInitSuccess: (state, action) => {
			state.dex = action.payload;
			state.initLoading = false;
		},
		getInitError: (state, action) => {
			state.getError = true;
		},
	},
});

export const store = configureStore({
	reducer: slice.reducer,
});

const { getInitStart, getInitSuccess, getInitError } = slice.actions;

const INIT_LIMIT = 20;
export const getInit = () => async (dispatch) => {
	dispatch(getInitStart());
	let calls = [];
	for (let i = 0; i < INIT_LIMIT; i++) {
		calls.push(axios.get(`https://pokeapi.co/api/v2/pokemon/${i + 1}`));
	}
	await Promise.all(calls)
		.then((res) => {
			let initDex = [];
			res.forEach((pokemon) => initDex.push(pokemon.data));
			dispatch(getInitSuccess(initDex));
		})
		.catch((err) => {
			dispatch(getInitError(err));
		});
};
