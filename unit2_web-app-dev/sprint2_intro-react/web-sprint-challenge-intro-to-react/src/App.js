import React, {useState, useEffect} from 'react';
import './App.css';
import axios from 'axios';
import styled from 'styled-components';
import Character from './components/Character.js';

const Pokedex = styled.div`
	width: 100%;
	display: flex;
	justify-content: space-evenly;
	flex-wrap: wrap;
`

const App = () => {
	const [dex, setDex] = useState([]);
	const startDex = 1;
	const endDex = 151;

	useEffect(() => {
			let promises = [];
			for(let i = startDex; i <= endDex; i++){
				promises.push(axios.get(`https://pokeapi.co/api/v2/pokemon-species/${i}`));
			}
			axios.all(promises)
				.then(res => {
					setDex(res.map(r => r.data));
				})
				.catch(err => {
					debugger;
				});	
	}, []);
	

	return (
		<div className="App">
		<h1 className="Header">Pokédex</h1>
			<Pokedex>
				{
				dex.map(pokemon => {
					return <Character pokemon={pokemon}/>
				})
				}
			</Pokedex>
		</div>
	);
}

export default App;
