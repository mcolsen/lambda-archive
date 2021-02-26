import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import "bulma/css/bulma.css";
import "./styles.scss";
import App from "./App";
import { store } from "./carSlice";

const rootElement = document.getElementById("root");
ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	rootElement
);
