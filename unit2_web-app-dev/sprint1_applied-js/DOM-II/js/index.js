const navLinks = document.querySelectorAll('.nav-link');
const signUpButtons = document.querySelectorAll('.btn');
const hideButton = document.querySelector('#hide-content');
const darkButton = document.querySelector('#dark-mode');
const destinations = document.querySelectorAll('.destination');
const paragraphs = document.querySelectorAll('p');
const busImg = document.querySelector('.intro img');
const intro = document.querySelector('.intro');

//Prevent page reload on link click 
document.querySelectorAll('a').forEach(a => {
	a.addEventListener('click', event => {
		event.preventDefault();
	});
});

//Changes navigation link color to blue on mouseover and reverts on mouseout
navLinks.forEach(a => {
	a.addEventListener('mouseover', event => {
		event.target.style.color = 'blue';
	});

	a.addEventListener('mouseout', event => {
		if(!isDarkMode){
			event.target.style.color = '#212529';
		}
		else if(isDarkMode){
			event.target.style.color = 'white';
		}
	});
});

//Hides content when user presses "Hide Content" button and unhides content when user presses the button again 
let isContentHidden = false;

hideButton.addEventListener('click', event => {
	if(isContentHidden === false){
		document.querySelectorAll('section:not(#intro)').forEach(section => {
			section.style.display = 'none';
		});
		event.target.textContent = 'Show Content';
		isContentHidden = true; 
	}
	else if(isContentHidden === true){
		document.querySelectorAll('section:not(#intro)').forEach(section => {
			if(section.className === 'content-destination'){
				section.style.display = 'block';
			}
			else{
				section.style.display = 'flex';
			}
		});
		event.target.textContent = 'Hide Content';
		isContentHidden = false; 
	}
});

//Themes the site with a 'dark mode' when user presses "Dark Mode" button or presses "D" on keyboard and reverts styling when user repeats
let isDarkMode = false;

function setDarkMode(){
	if(isDarkMode === false){
		document.querySelectorAll('body').forEach(element => {
			element.style.backgroundColor = '#1e1e1e';
			element.style.color = 'white';
		});
		document.querySelector('header').style.backgroundColor = '#252526';
		navLinks.forEach(a => {
			a.style.color = 'white';
		});
		document.querySelector('footer').style.backgroundColor = '#333333';
		document.querySelector('footer p').style.color = 'white';
		darkButton.textContent = 'Light Mode';
		isDarkMode = true;
	}
	else if(isDarkMode === true){
		document.querySelectorAll('body').forEach(element => {
			element.style.backgroundColor = 'white';
			element.style.color = 'black';
		});
		document.querySelector('header').style.backgroundColor = 'white';
		navLinks.forEach(a => {
			a.style.color = '#212529';
		});
		document.querySelector('footer').style.backgroundColor = '#FFEBCD';
		document.querySelector('footer p').style.color = '#212529';
		darkButton.textContent = 'Dark Mode';
		isDarkMode = false;
	}
}

darkButton.addEventListener('click', event => {
	setDarkMode();
});

document.addEventListener('keydown', event => {
	if(event.code == 'KeyD'){
		setDarkMode();
	}
});

//Changes background color of sign up buttons to random RBG value on mouseover and reverts on mouseout
//Changes text color to black on click 
signUpButtons.forEach(button => {
	button.addEventListener('mouseover', event => {
		event.target.style.backgroundColor = `rgb(${rand256()}, ${rand256()}, ${rand256()})`;

		function rand256(){
			return Math.floor(256 * Math.random());
		}
	});

	button.addEventListener('mouseout', event => {
		event.target.style.backgroundColor = '#17A2B8';
	});

	button.addEventListener('click', event => {
		event.target.style.color = 'black';
		event.stopPropagation();
	});
});

//Intentionally creating an edge case that requires the use of stopPropogation above to meet assingment requirements 
destinations.forEach(div => {
	div.addEventListener('click', event => {
		div.style.backgroundColor = 'grey';
	});
});

//Forces light mode for printing and reverts to prior mode when print dialog is closed 
let printDarkMode = false; 

window.addEventListener('beforeprint', event => {
	if(isDarkMode === true){
		setDarkMode();
		printDarkMode = true;
	}
});

window.addEventListener('afterprint', event => {
	if(printDarkMode === true){
		setDarkMode();
	}
	printDarkMode = false;
});

//Styles text within <p> tags with green color if window is resized <800px 
window.addEventListener('resize', event => {
	if(window.innerWidth <= 800){
		paragraphs.forEach(p => {
			p.style.color = 'green';
		});
	}
	else{
		paragraphs.forEach(p => {
			p.style.color = 'black';
		});
	}
});

//Intentionally causes an error loading the header image when the user presses the E key and uses error event to style the area red to indicate the error and the load event to revert when the user resolves the error by releasing the E key 
document.addEventListener('keydown', event => {
	if(event.code == 'KeyE'){
		if(busImg.attributes.getNamedItem('src') != null){
			busImg.setAttribute('src', 'fake-url.jpg');
		}
	}
});

document.addEventListener('keyup', event => {
	if(event.code == 'KeyE'){
		busImg.setAttribute('src', '/fun-bus.927a34f2.jpg');
	}
});

busImg.addEventListener('error', event => {
	intro.style.backgroundColor = 'red';
});

busImg.addEventListener('load', event => {
	intro.style.backgroundColor = 'white';
});

//Increased font size on sign up butons on double-click 
signUpButtons.forEach(button => {
	button.addEventListener('dblclick', event => {
		event.target.style.fontSize = '3rem';
	});
});