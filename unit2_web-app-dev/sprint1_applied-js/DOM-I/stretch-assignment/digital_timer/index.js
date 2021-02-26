const delay = 10;
let time = 0;

let secT = document.querySelector('#secondTens');
let secO = document.querySelector('#secondOnes');
let msH = document.querySelector('#msHundreds');
let msT = document.querySelector('#msTens');
let colon = document.querySelector('#colon');

const start = document.querySelector('#start');
const pause = document.querySelector('#pause');
const reset = document.querySelector('#reset');

let timer; 

start.addEventListener('click', event => {	
	start.setAttribute('disabled', 'true');
	timer = window.setInterval(increment, delay);
});

pause.addEventListener('click', event => {	
	window.clearInterval(timer);
	start.removeAttribute('disabled');
});

reset.addEventListener('click', event => {	
	time = 0;
	window.clearInterval(timer);
	start.removeAttribute('disabled');
	msT.textContent = '-';
	msH.textContent = '-';
	secO.textContent = '-';
	secT.textContent = '-';
	msT.style.color = 'black';
	msH.style.color = 'black';
	colon.style.color = 'black';
	secO.style.color = 'black';
	secT.style.color = 'black';
});

function increment(){
	time += delay;

	if(time <= 10000){
		let clock = time / 10; 
		msT.textContent = clock % 10;
		clock = Math.floor(clock / 10);
		msH.textContent = clock % 10;
		clock = Math.floor(clock / 10);
		secO.textContent = clock % 10;
		clock = Math.floor(clock / 10);
		secT.textContent = clock;
		if(clock === 1){
			msT.style.color = 'red';
			msH.style.color = 'red';
			colon.style.color = 'red';
			secO.style.color = 'red';
			secT.style.color = 'red';
		}
	}
	else{
		window.clearInterval(timer);
		start.removeAttribute('disabled');
	}
}