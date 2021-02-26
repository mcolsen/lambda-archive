// STEP 3: Create article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-api.herokuapp.com/articles
// Study the response data you get back, closely.
// You will be creating a card for each article in the response.
// This won't be as easy as just iterating over an array though.
//
// Write a function that takes a single article object and returns the following markup:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {author's name}</span>
//   </div>
// </div>
//
// Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
//
// Use your function to create a card for each of the articles, and append each card to the DOM.

// Axios is installed via npm for network/server issues stretch, script can't be retrieved remotely if network is down 
import axios from 'axios';

function Card(article, tabClass){
	const card = document.createElement('div');
	card.classList.toggle('card');
	card.classList.toggle(tabClass);

	const headline = document.createElement('div');
	headline.classList.toggle('headline');
	headline.textContent = article.headline;
	card.appendChild(headline);

	const author = document.createElement('div');
	author.classList.toggle('author');
	card.appendChild(author);

	const imgContainer = document.createElement('div');
	imgContainer.classList.toggle('img-container');
	author.appendChild(imgContainer);

	const img = document.createElement('img');
	img.setAttribute('src', article.authorPhoto);
	imgContainer.appendChild(img);

	const name = document.createElement('span');
	name.textContent = `By ${article.authorName}`;
	card.appendChild(name);

	card.addEventListener('click', e => {
		console.log(headline.textContent);
	});

	return card;
}

axios.get('https://lambda-times-api.herokuapp.com/articles')
	.then(res => {
		const articles = Object.entries(res.data.articles);
		articles.forEach(arr => {
			arr[1].forEach(obj => {
				document.querySelector('.cards-container').appendChild(Card(obj, arr[0]));
			});
		});
	})
	.catch(err => {
		const error = document.createElement('div');
		error.style.width = '100%';
		error.style.backgroundColor = 'red';

		const h2 = document.createElement('h2');
		h2.textContent = err;
		h2.style.textAlign = 'center';
		error.appendChild(h2);

		document.querySelector('.cards-container').appendChild(error);
	});