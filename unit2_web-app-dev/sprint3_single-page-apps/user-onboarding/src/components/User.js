import React from "react";

function User(props) {
	const { user } = props;

	let censored = user.password.charAt(0);
	for (let i = 0; i < user.password.length - 1; i++) {
		censored = censored.concat("*");
	}

	return (
		<div className="user">
			<p>Name: {user.name}</p>
			<p>Email: {user.email}</p>
			<p>Password: {censored}</p>
		</div>
	);
}

export default User;
