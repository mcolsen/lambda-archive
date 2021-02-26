import React from "react";
import axios from "axios";
import Card from "react-bootstrap/Card";

class GithubCard extends React.Component {
	constructor() {
		super();
		this.state = { followerList: [] };
	}

	componentDidMount() {
		axios
			.get("https://api.github.com/users/mcolsen")
			.then((res) => this.setState(res.data))
			.catch((err) => console.error(err));
		axios
			.get("https://api.github.com/users/mcolsen/followers")
			.then((res) => this.setState({ followerList: res.data }))
			.catch((err) => console.error(err));
	}

	componentDidUpdate() {
		console.log(this.state);
	}

	render() {
		return (
			<Card>
				<Card.Header>{this.state.login}</Card.Header>
				<Card.Body>
					<Card.Title>{this.state.name}</Card.Title>
					<Card.Subtitle>{this.state.location}</Card.Subtitle>
					<Card.Text>
						Followers: {this.state.followerList.map((user) => `${user.login} `)}
					</Card.Text>
				</Card.Body>
			</Card>
		);
	}
}

export default GithubCard;
