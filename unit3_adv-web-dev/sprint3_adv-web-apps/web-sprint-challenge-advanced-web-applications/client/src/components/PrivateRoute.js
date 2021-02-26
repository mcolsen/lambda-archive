import React, { useState, useEffect } from "react";
import { Route, Redirect } from "react-router-dom";

function PrivateRoute(props) {
	const { token } = props;
	const [loginStatus, setLoginStatus] = useState(false);

	useEffect(() => {
		if (token) {
			setLoginStatus(true);
		}
	}, [token]);

	return (
		<Route {...props}>
			{loginStatus ? props.children : <Redirect to="/" />}
		</Route>
	);
}

export default PrivateRoute;
