// STEP 1: Create a Header component.
// -----------------------
// Write a function that takes no arguments and returns the markup you see below:
//
//  <div class="header">
//    <span class="date">MARCH 28, 2020</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div>
//
// Use your function to create a header
// and append it to the DOM inside the div.header-container

function Header(){
	const header = document.createElement('div');
	header.classList.toggle('header');

	const date = document.createElement('span');
	date.classList.toggle('data');
	date.textContent = 'MARCH 28, 2020';
	header.appendChild(date);

	const h1 = document.createElement('h1');
	h1.textContent = 'Lambda Times';
	header.appendChild(h1);

	const temp = document.createElement('span');
	temp.classList.toggle('temp');
	temp.textContent = '98°'
	header.appendChild(temp);

	return header;
}

document.querySelector('.header-container').appendChild(Header());