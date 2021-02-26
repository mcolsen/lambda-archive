import React from 'react';
import styled from 'styled-components';

const PokeDiv = styled.div`
	background-color: #1e1e1e;
	width: 45%;
	padding: 1%;
	margin: 1%;
	border-radius: 20px;
`

const H2 = styled.h2`
	color: white;
	text-align: center;
`

const Red = styled.p`
	color: red;
`

const Yellow = styled.p`
	color: yellow;
`

const Gold = styled.p`
	color: gold;
`

const Silver = styled.p`
	color: silver;
`

const Crystal = styled.p`
	color: lightgrey;
`

export default function Character(props){
	let redDex = '';
	let yellowDex = '';
	let goldDex = '';
	let silverDex = '';
	let crystalDex = '';

	props.pokemon.flavor_text_entries.forEach(dexEntry => {
			if(dexEntry.version.name === 'red' && dexEntry.language.name === 'en'){
				redDex = dexEntry.flavor_text;
			} 
			else if(dexEntry.version.name === 'yellow' && dexEntry.language.name === 'en'){
				yellowDex = dexEntry.flavor_text;
			}
			else if(dexEntry.version.name === 'gold' && dexEntry.language.name === 'en'){
				goldDex = dexEntry.flavor_text;
			}
			else if(dexEntry.version.name === 'silver' && dexEntry.language.name === 'en'){
				silverDex = dexEntry.flavor_text;
			}
			else if(dexEntry.version.name === 'crystal' && dexEntry.language.name === 'en'){
				crystalDex = dexEntry.flavor_text;
			}
		}
	)

	let formattedName = props.pokemon.name.replace(props.pokemon.name.charAt(0), props.pokemon.name.charAt(0).toUpperCase());
	
	return(
		<PokeDiv>
			<H2>#{props.pokemon.pokedex_numbers[0].entry_number} - {formattedName}</H2>
			<Red>Red: {redDex}</Red>
			<Yellow>Yellow: {yellowDex}</Yellow>
			<Gold>Gold: {goldDex}</Gold>
			<Silver>Silver: {silverDex}</Silver>
			<Crystal>Crystal: {crystalDex}</Crystal>
		</PokeDiv>
	)
}