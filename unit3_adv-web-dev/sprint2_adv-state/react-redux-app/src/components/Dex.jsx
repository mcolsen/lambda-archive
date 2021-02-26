import { useEffect } from "react";
import { connect } from "react-redux";
import CardDeck from "react-bootstrap/CardDeck";
import Card from "react-bootstrap/Card";
import Media from "react-bootstrap/Media";

import { getInit } from "../redux/store";

function Dex(props) {
	const { dex, getInit } = props;

	useEffect(() => {
		if (dex.length === 0) {
			getInit();
		}
	}, []);

	return (
		<CardDeck>
			{dex.map((pokemon) => (
				<Card>
					<Card.Header>
						<Media>
							<Media.Body className="my-auto">
								#{`${pokemon.order}`.padStart(3, "0")}
							</Media.Body>
							<img
								src={
									pokemon.sprites.versions["generation-vii"].icons.front_default
								}
								alt={`${pokemon.name} default front sprite`}
								className="ml-auto"
							/>
						</Media>
					</Card.Header>
					<Card.Body>
						<Card.Title>{pokemon.name}</Card.Title>
						<Card.Text>
							{pokemon.types.length === 2
								? `${pokemon.types[0].type.name} / ${pokemon.types[1].type.name}`
								: pokemon.types[0].type.name}
						</Card.Text>
					</Card.Body>
				</Card>
			))}
		</CardDeck>
	);
}

const mapState = (state) => {
	return {
		dex: state.dex,
	};
};

const mapDispatch = {
	getInit,
};

export default connect(mapState, mapDispatch)(Dex);
