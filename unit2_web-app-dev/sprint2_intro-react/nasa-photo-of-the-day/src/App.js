import React, {useState, useEffect} from 'react';
import axios from 'axios';
import styled from 'styled-components';
import theme from './theme';

const PrimaryContainer = styled.div`
	@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;500&display=swap');
	font-family: Roboto, sans-serif;
	background-color: ${props => props.theme.bgColor};
	min-height: 100vh;
	width: 100%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`

const H1 = styled.h1`
	color: ${props => props.theme.textColor};
	font-size: ${props => props.theme.h1FontSize};
	text-align: center;
	padding: ${props => props.theme.h1Padding};
`

const ImageContainer = styled.div`
	height: ${props => props.theme.imageHeight};
	width: ${props => props.theme.imageWidth};
	background-repeat: no-repeat;
	background-size: cover;
	background-position: 50%;
	background-image: url(${props => props.hdurl});
`

const InfoContainer = styled.div`
	width: ${props => props.theme.infoWidth};
	color: ${props => props.theme.textColor};
`

const H2 = styled.h2`
	font-size: ${props => props.theme.h2FontSize};
	text-align: center;
	padding: ${props => props.theme.h2Padding};
`

const H3 = styled.h3`
	font-size: ${props => props.theme.h3FontSize};
	text-align: center;
	padding: ${props => props.theme.h3Padding};
`

const Explanation = styled.p`
	font-size: ${props => props.theme.explanationFontSize};
	font-weight: ${props => props.theme.explanationAndCopyrightFontWeight};
	line-height: ${props => props.theme.explanationLineHeight};
	text-align: justify;
`

const Copyright = styled.p`
	font-size: ${props => props.theme.copyrightFontSize};
	font-weight: ${props => props.theme.explanationAndCopyrightFontWeight};
	text-align: center;
	padding: ${props => props.theme.copyrightPadding};
`

function App(){
	const [apodData, setApodData] = useState();

	useEffect(() => {
		const fetchApod = () => {
			axios.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY')
				.then(res => {
					setApodData(res.data);
				})
				.catch(err => {
					console.log(err);
					debugger;
				});
			}
			fetchApod();
	}, []);

	function ApodContainer(props){
		return (
			<PrimaryContainer>
				<H1>NASA Astronomy Picture of the Day</H1> 
					<ImageContainer hdurl={props.data.hdurl}/>
					<InfoContainer>
						<H2>{props.data.title}</H2>
						<H3>{`Date: ${props.data.date}`}</H3>
						<Explanation>{props.data.explanation}</Explanation>
						<Copyright>{`Image Copyright: ${props.data.copyright}`}</Copyright>
					</InfoContainer>
			</PrimaryContainer>
		);
	}

	return (
		<div className='App'>
			{
			apodData && <ApodContainer data={apodData} theme={theme}/>
			}
		</div>
	);
}

export default App;