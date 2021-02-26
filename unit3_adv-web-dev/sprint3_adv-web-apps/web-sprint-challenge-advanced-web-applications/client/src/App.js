import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Login from "./components/Login";
import PrivateRoute from "./components/PrivateRoute";
import BubblePage from "./components/BubblePage";

function App() {
	const [token, setToken] = useState();

	useEffect(() => {
		if (localStorage.getItem("token")) {
			setToken(localStorage.getItem("token"));
		}
	}, []);

	useEffect(() => {
		if (token) {
			//history.push("/bubble");
		}
	}, [token]);

	return (
		<Router>
			<div className="App">
				{token ? <Login setToken={setToken} /> : <BubblePage />}
			</div>
		</Router>
	);
}

export default App;
