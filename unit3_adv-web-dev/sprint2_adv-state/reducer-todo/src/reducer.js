import shortid from "shortid";

export const reducer = (state, action) => {
	switch (action.type) {
		case "NEW":
			return [...state, action.payload];
		case "COMPLETE":
			console.log(state);
			console.log(action);
			let update = [...state];
			let index = state.findIndex((todo) => todo.id === action.payload);
			update[index] = { ...state[index], completed: !update[index].completed };
			return update;
		case "CLEAR":
			return state.filter((todo) => !todo.completed);
		default:
			console.log(action);
	}
};

export const init = [
	{
		item: "Learn about reducers",
		completed: false,
		id: shortid.generate(),
	},
];
