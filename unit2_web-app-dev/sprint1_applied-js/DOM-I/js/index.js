const siteContent = {
	"nav": {
		"nav-item-1": "Services",
		"nav-item-2": "Product",
		"nav-item-3": "Vision",
		"nav-item-4": "Features",
		"nav-item-5": "About",
		"nav-item-6": "Contact",
		"img-src": "img/logo.png"
	},
	"cta": {
		"h1": "DOM Is Awesome",
		"button": "Get Started",
		"img-src": "img/header-img.png"
	},
	"main-content": {
		"features-h4":"Features",
		"features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
		"about-h4":"About",
		"about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
		"middle-img-src": "img/mid-page-accent.jpg",
		"services-h4":"Services",
		"services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
		"product-h4":"Product",
		"product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
		"vision-h4":"Vision",
		"vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
	},
	"contact": {
		"contact-h4" : "Contact",
		"address" : "123 Way 456 Street Somewhere, USA",
		"phone" : "1 (888) 888-8888",
		"email" : "sales@greatidea.io",
	},
	"footer": {
		"copyright" : "Copyright Great Idea! 2018"
	},
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

let navLinks = document.querySelectorAll('nav a');
navLinks[0].textContent = 'Services';
navLinks[1].textContent = 'Product';
navLinks[2].textContent = 'Vision';
navLinks[3].textContent = 'Features';
navLinks[4].textContent = 'About';
navLinks[5].textContent = 'Contact';

const newLink1 = document.createElement('a');
newLink1.textContent = 'Blog';
newLink1.href = '#';
document.querySelector('nav').prepend(newLink1);

const newLink2 = document.createElement('a');
newLink2.textContent = 'Pricing';
newLink2.href = '#';
document.querySelector('nav').appendChild(newLink2);

navLinks = document.querySelectorAll('nav a');
navLinks.forEach((a) => {
	a.style.color = 'green';
})

const h1 = document.querySelector('h1');
h1.innerText = `DOM\n Is\n Awesome`

const button = document.querySelector('button');
button.textContent = 'Get Started';

const ctaImg = document.querySelector('#cta-img'); 
ctaImg.setAttribute('src', 'img/header-img.png');

const textContentH4 = document.querySelectorAll('.text-content h4');
textContentH4[0].textContent = 'Features';
textContentH4[1].textContent = 'About';
textContentH4[2].textContent = 'Services';
textContentH4[3].textContent = 'Product';
textContentH4[4].textContent = 'Vision';

const textContentP = document.querySelectorAll('.text-content p');
textContentP[0].textContent = 'Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.';
textContentP[1].textContent = 'About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.';
textContentP[2].textContent = 'Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.';
textContentP[3].textContent = 'Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.';
textContentP[4].textContent = 'Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.';

const middleImg = document.querySelector('.middle-img');
middleImg.setAttribute('src', 'img/mid-page-accent.jpg');

const contactH4 = document.querySelector('.contact h4');
contactH4.textContent = 'Contact';

const contactP = document.querySelectorAll('.contact p');
contactP[0].textContent = '123 Way 456 Street\nSomewhere, USA';
contactP[1].textContent = '1 (888) 888-8888';
contactP[2].textContent = 'sales@greatidea.io';

const footerP = document.querySelector('footer p');
footerP.textContent = 'Copyright Great Idea! 2018';