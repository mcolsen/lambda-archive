import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {ThemeProvider} from 'styled-components';
import { Reset } from 'styled-reset'
import theme from './theme';

ReactDOM.render(
	<ThemeProvider theme={theme}>
		<Reset/>
		<App/>
	</ThemeProvider>, 
document.getElementById('root'));
