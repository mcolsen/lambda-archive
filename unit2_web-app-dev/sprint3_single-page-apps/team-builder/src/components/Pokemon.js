import React, { useState } from "react";

function Pokemon(props) {
	return (
		<div className="pokemon">
			<div className="pokemon-top">
				<div className="pokemon-top-container">
					<h2 className="pokemon-name">{props.pokemon.name}</h2>
					{props.pokemon.gender === "male" ? (
						<span className="pokemon-gender">♂</span>
					) : props.pokemon.gender === "female" ? (
						<span className="pokemon-gender">♀</span>
					) : props.pokemon.gender === "genderless" ? (
						<span className="pokemon-gender">Genderless</span>
					) : (
						""
					)}
				</div>
				{props.pokemon.level ? (
					<span className="pokemon-level">Lv{props.pokemon.level}</span>
				) : (
					""
				)}
			</div>
			<div className="pokemon-middle">
				<div className="pokemon-types">
					<span className="pokemon-type">{props.pokemon.type1}</span>
					{props.pokemon.type2 ? (
						<span className="pokemon-type"> / {props.pokemon.type2}</span>
					) : (
						""
					)}
				</div>
				{props.pokemon.dexNo ? (
					<span className="pokemon-dex-no">#{props.pokemon.dexNo}</span>
				) : (
					""
				)}
			</div>
			<div className="pokemon-moves">
				{props.pokemon.moves.map((move) => (
					<span className="pokemon-move">{move}</span>
				))}
			</div>
		</div>
	);
}

export default Pokemon;
