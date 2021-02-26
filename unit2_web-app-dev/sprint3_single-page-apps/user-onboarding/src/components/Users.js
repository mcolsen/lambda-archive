import React from "react";
import User from "./User";

function Users(props) {
	return (
		<div>
			<h2>Users</h2>
			{props.users.map((user) => (
				<User user={user} />
			))}
		</div>
	);
}

export default Users;
