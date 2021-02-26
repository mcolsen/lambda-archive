import { createSlice, configureStore } from "@reduxjs/toolkit";

const carSlice = createSlice({
	name: "car",
	initialState: {
		car: {
			price: 26395,
			name: "2019 Ford Mustang",
			image:
				"https://cdn.motor1.com/images/mgl/0AN2V/s1/2019-ford-mustang-bullitt.jpg",
			features: [],
		},
		additionalFeatures: [
			{ id: 1, name: "V-6 engine", price: 1500 },
			{ id: 2, name: "Racing detail package", price: 1500 },
			{ id: 3, name: "Premium sound system", price: 500 },
			{ id: 4, name: "Rear spoiler", price: 250 },
		],
		additionalPrice: 0,
	},
	reducers: {
		addFeature: (state, action) => {
			let feature = state.additionalFeatures.find(
				(feature) => feature.id === action.payload
			);
			state.car.features.push(feature);
			state.car.price += feature.price;
		},
		removeFeature: (state, action) => {
			let index = state.car.features.findIndex(
				(feature) => feature.id === action.payload
			);
			state.car.price -= state.car.features[index].price;
			state.car.features.splice(index, 1);
		},
	},
});

const { actions } = carSlice;
export const { addFeature, removeFeature } = actions;

export const store = configureStore({
	reducer: carSlice.reducer,
});
