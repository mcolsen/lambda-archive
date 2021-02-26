import React, { useState } from "react";
import Pokemon from "./Pokemon";

function Team(props) {
	return (
		<div className="team">
			{props.team.map((pokemon) => (
				<Pokemon pokemon={pokemon} />
			))}
		</div>
	);
}

export default Team;
