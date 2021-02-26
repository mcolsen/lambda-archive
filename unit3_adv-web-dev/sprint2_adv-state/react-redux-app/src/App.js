import Container from "react-bootstrap/Container";

import "bootstrap/dist/css/bootstrap.min.css";

import Dex from "./components/Dex";

function App() {
	return (
		<Container>
			<h1>ReactRedex</h1>
			<Dex />
		</Container>
	);
}

export default App;
