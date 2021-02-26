import React, { useState } from "react";
import { Route, Switch } from "react-router-dom";

import Home from "./components/Home";
import Form from "./components/Form";
import Confirmation from "./components/Confirmation";

const App = () => {
	const [db, setDb] = useState();

	return (
		<div>
			<Switch>
				<Route exact path="/" component={Home} />
				<Route path="/pizza">
					<Form db={db} setDb={setDb} />
				</Route>
				<Route path="/confirm">
					<Confirmation db={db} />
				</Route>
			</Switch>
		</div>
	);
};
export default App;
