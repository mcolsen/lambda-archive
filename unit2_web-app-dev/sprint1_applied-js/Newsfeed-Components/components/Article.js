//Import article data from external module 
import {data} from '/components/data.js';

//Assignment instructions are at the bottom of this file 
function articleMaker(articleData){
	const article = document.createElement('div');
	article.classList.toggle('article');

	const titleH2 = document.createElement('h2');
	titleH2.textContent = articleData.title;
	article.appendChild(titleH2);

	const dateP = document.createElement('p');
	dateP.classList.toggle('date');
	dateP.textContent = articleData.date;
	article.appendChild(dateP);

	const firstP = document.createElement('p');
	firstP.textContent = articleData.firstParagraph;
	article.appendChild(firstP);

	const secondP = document.createElement('p');
	secondP.textContent = articleData.secondParagraph;
	article.appendChild(secondP);

	const thirdP = document.createElement('p');
	thirdP.textContent = articleData.thirdParagraph;
	article.appendChild(thirdP);

	const expandSpan = document.createElement('span');
	expandSpan.classList.toggle('expandButton');
	expandSpan.textContent = '+';
	expandSpan.addEventListener('click', event => {
		article.classList.toggle('article-open');
	});
	article.appendChild(expandSpan);

	return article;
}

const articleContainer = document.querySelector('.articles');
data.forEach(articleData => {
	articleContainer.appendChild(articleMaker(articleData));
});

/*
	Step 1: Write a component called 'articleMaker' to create an article.
	Your component is a function that takes an article object as its only argument,
	and returns a DOM node looking like the one below:

	<div class="article">
		<h2>{title of the article}</h2>
		<p class="date">{date of the article}</p>

		{three separate paragraph elements}

		<span class="expandButton">+</span>
	</div>

	Step 2: Still inside `articleMaker`, add an event listener to the span.expandButton.
	This listener should toggle the class 'article-open' on div.article.

	Step 3: Don't forget to return something from your function!

	Step 4: Outside your function now, loop over the data. At each iteration you'll use your component
	to create a div.article element and append it to the DOM inside div.articles (see index.html).

	Step 5: Try adding new article object to the data array. Make sure it is in the same format as the others.
	Refresh the page to see the new article.
*/

// This is the data we will be using to create our articles. Look at it, then proceed to line 93.
// OPTIONAL: if you're feeling adventurous, try to make this data an export from a different module, and import it here.
// You can read about ES6 modules here: https://exploringjs.com/es6/ch_modules.html#sec_basics-of-es6-modules