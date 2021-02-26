// ⭐️ Example Challenge START ⭐️

/**
 * ### Challenge `processFirstItem`
 * 
 * @instructions
 * Implement a higher-order function called `processFirstItem`.
 * It takes two arguments:
 * @param stringList an array of strings.
 * @param callback function that takes a string as its argument.
 * @returns the result of invoking `callback` with the FIRST element in `stringList`.
 * 
 * Example of usage of this higher-order function:
 * Invoking `processFirstItem` passing `['foo', 'bar']` and `(str) => str + str`,
 * should return 'foofoo'.
*/
function processFirstItem(stringList, callback) {
  return callback(stringList[0])
}

// ⭐️ Example Challenge END ⭐️


///// M V P ///////

/* Task 1: `counterMaker`
 * Study the code for counter1 and counter2. Answer the questions below.
 * 
 * 1. What is the difference between counter1 and counter2?
 * counter1 is a function returned by the counterMaker() function, which would allow you to create an arbitrary number of counter functions. the count variable is also containted within the scope of counter1 rather than the global scope
 * 
 * 2. Which of the two uses a closure? How can you tell?
 * counter1 because the count variable is contained within its scope while counter2 increments a different variable (also called count) in the global scope
 * 
 * 3. In what scenario would the counter1 code be preferable? In what scenario would counter2 be better? 
 * counter1 is better any time you would want to create multiple separate counters, but counter2 may be preferable if you only need one counter
 *
*/

// counter1 code
function counterMaker() {
  let count = 0;
  return function counter() {
    count++;
  }
}

const counter1 = counterMaker();

// counter2 code
let count = 0;

function counter2() {
  return count++;
}


/* Task 2: inning() 

Write a function called `inning` that generates a random number of points that a team scored in an inning. This should be a whole number between 0 and 2. */

function inning(){
	return(Math.floor(Math.random() * 3));
}

/* Task 3: finalScore()

Write a higher order function called `finalScore` that accepts the callback function `inning` (from above) and a number of innings and and returns the final score of the game in the form of an object.

For example, 

finalScore(inning, 9) might return: 
{
  "Home": 11,
  "Away": 5,
}

*/ 

function finalScore(callback, num){
	let home = 0; 
	let away = 0; 
	for(let i = 0; i < num; i++){
		home += callback();
		away += callback();
	}
	return {"Home": home, "Away": away};
}

/* Task 4: 

Create a function called `scoreboard` that accepts the following parameters: 

(1) Callback function `getInningScore`
(2) Callback function `inning`
(2) A number of innings

and returns the score at each pont in the game, like so:

1st inning: awayTeam - homeTeam
2nd inning: awayTeam - homeTeam
3rd inning: awayTeam - homeTeam
4th inning: awayTeam - homeTeam
5th inning: awayTeam - homeTeam
6th inning: awayTeam - homeTeam
7th inning: awayTeam - homeTeam
8th inning: awayTeam - homeTeam
9th inning: awayTeam - homeTeam

Final Score: awayTeam - homeTeam */

function scoreboard(inning, getInningScore, num){
	let scores = [];
	for(let i = 0; i < num; i++){
		scores.push([inning(), inning()]);
	}
	let board = getInningScore(scores);
	let boardString = ``;
	for(let i = 0; i < board.length; i++){
		if((i + 1) % 10 === 1){
			boardString = boardString.concat(`${(i + 1)}st inning: ${board[i][0]} - ${board[i][1]}\n`);
		}
		else if((i + 1) % 10 === 2){
			boardString = boardString.concat(`${(i + 1)}nd inning: ${board[i][0]} - ${board[i][1]}\n`);
		}
		else if((i + 1) % 10 === 3){
			boardString = boardString.concat(`${(i + 1)}rd inning: ${board[i][0]} - ${board[i][1]}\n`);
		}
		else{
			boardString = boardString.concat(`${(i + 1)}th inning: ${board[i][0]} - ${board[i][1]}\n`);
		}
	}
	return boardString.concat(`\nFinal Score: ${board[(board.length - 1)][0]} - ${board[(board.length - 1)][1]}`);
}

function getInningScore(scoreArray){
	let cumScores = [];
	for(let i = 0; i < scoreArray.length; i++){
		if(i > 0){
			cumScores.push([(cumScores[i - 1][0] + scoreArray[i][0]), (cumScores[i - 1][1] + scoreArray[i][1])]);
		}
		else{
			cumScores.push(scoreArray[i]);
		}
	}
	return cumScores;
}