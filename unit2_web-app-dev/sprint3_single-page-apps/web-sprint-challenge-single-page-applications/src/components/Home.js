import React from "react";
import { Link } from "react-router-dom";

function Home() {
	return (
		<Link to={"/pizza"}>
			<button>Pizza?</button>
		</Link>
	);
}

export default Home;
