/************************************************************** Task 1: Warm-up! **************************************************************/
//Task a: declare a variable called votingAge, console log true if age > 18 (no function required)

const votingAge = 18;
console.log(votingAge >= 18);

//Task b: declare a variable and then use a conditional to change the value of that variable based on the value assigned to a second variable (no function required)

let first = 35;
const second = true; 

if(second){
    first = 0;
}

//Task c: Convert string ("1999") to integer (1999)  (no function required) // hint look up the Number method

const convertedString = Number("1999");
//console.log(convertedString);

//Task d: Write a function to multiply a*b 

function multiply(a,b){
    return(a * b);
}

/************************************************************** Task 2 **************************************************************/
//Age in Dog years
//write a function that takes your age and returns it to you in dog years - they say that 1 human year is equal to seven dog years 

function dogYears(humanYears){
    return(humanYears * 7);
}

/************************************************************** Task 3 **************************************************************/
//Dog feeder 
//takes weight in pounds and age in years (note if the dog is a puppy the age will be a decimal) and returns the number of pounds of raw food to feed in a day.

//feeding requirements
// adult dogs at least 1 year 
// up to 5 lbs - 5% of their body weight
// 6 - 10 lbs - 4% of their body weight 
// 11 - 15 lbs - 3% of their body weight 
// > 15lbs - 2% of their body weight 

// Puppies less than 1 year
// 2 - 4 months 10% of their body weight
// 4 - 7 months 5% of their body weight 
// 7 - 12 months 4% of their body weight

// when you are finished invoke your function with the weight of 15 lbs and the age of 1 year - if your calculations are correct your result should be 0.44999999999999996

function dogFeeder(age, weight){
    if(age <= 1){
        if(age >= 0.1667 && age <= 0.3333){
            return(weight * 0.1);
        }
        else if(age >= 0.3333 && age <= 0.5833){
            return(weight * 0.05);
        }
        else if(age >= 0.5833 && age <= 1){
            return(weight * 0.04);
        }
        else return("Error - Puppy is too young");
    }
    else if(age >= 1){
        weight = Math.round(weight);
        if(weight <= 5){
            return(weight * 0.05);
        }
        else if(weight >= 6 && weight <= 10){
            return(weight * 0.04);
        }
        else if(weight >= 11 && weight <= 15){
            return(weight * 0.03);
        }
        else if(weight >= 15){
            return(weight * 0.02);
        }
        else{
            return("Error");
        }
    }
    else{
        return("Error");
    }
}

/************************************************************** Task 4 **************************************************************/
// Rock, Paper, Sissors
// Your function should take a string (either rock paper or sissors)
// it should return you won or you lost based on the rules of the game (you may need to look up the rules if you have not played before)
// use math.random to determine the computers choice 
// hint while you can complete this with only conditionals based on strings it may help to equate choice to a number 

function rpsGame(playerChoice){
    const computerChoice = getComputerChoice();
    if(playerChoice === "rock"){
        if(computerChoice === "rock"){
            return("Draw! Opponent chose rock.")
        }
        else if(computerChoice === "paper"){
            return("Computer wins! Opponent chose paper.")
        }
        else if(computerChoice === "scissors"){
            return("You win! Opponent chose scissors.")
        }
        else{
            return("Error");
        }
    }
    else if(playerChoice === "paper"){
        if(computerChoice === "rock"){
            return("You win! Opponent chose rock.")
        }
        else if(computerChoice === "paper"){
            return("Draw! Opponent chose paper.")
        }
        else if(computerChoice === "scissors"){
            return("Computer wins! Opponent chose scissors.")
        }
        else{
            return("Error");
        }
    }
    else if(playerChoice === "scissors"){
        if(computerChoice === "rock"){
            return("Computer wins! Opponent chose rock.")
        }
        else if(computerChoice === "paper"){
            return("You win! Opponent chose paper.")
        }
        else if(computerChoice === "scissors"){
            return("Draw! Opponent chose scissors.")
        }
        else{
            return("Error");
        }
    }
    else{
        return("Error - Please enter 'rock', 'paper', or 'scissors'.")
    }
}

function getComputerChoice(){
    let tempChoice = Math.random();
    if(tempChoice <= 0.3333){
        return("rock");
    }
    else if(tempChoice >= 0.3333 && tempChoice <= 0.6667){
        return("paper");
    }
    else{
        return("scissors");
    }
}

/************************************************************** Task 5 **************************************************************/
//Metric Converter
//a. KM to Miles - should take the number of kilometers and convert it to the equal number of miles

function convertKmToMi(km){
    return(km * 0.621371192);
}

//b. Feet to CM - should take the number of feet and convert it to the equal number of centimeters

function convertFtToCm(ft){
    return(ft * 30.48);
}

/************************************************************** Task 6 **************************************************************/
// 99 bottles of soda on the wall
// create a function called annoyingSong
// the function should take a starting number as an argument and count down - at each iteration it should log (number) bottles of soda on the wall, (number) bottles of soda, take one down pass it around (number left over) bottles of soda on the wall`
  
function annoyingSong(startBottles){
    if(typeof startBottles !== "number"){
        return("Error - Please enter a number")
    }
    for(let i = startBottles; i > 0; i--){
        console.log(i + " bottles of soda on the wall, " + i + " bottles of soda, take one down pass it around " + (i - 1) + " bottles of soda on the wall");
    }
}

/************************************************************** Task 7 **************************************************************/
//Grade Calculator
//write a javaScript program that takes a mark out of 100 and returns a corisponding letter grade 
//90s should be A 
//80s should be B 
//70s should be Cs 
//60s should be D 
//and anything below 60 should be F

function letterGrade(mark){
    mark = Math.floor(mark);
    if(mark >= 0 && mark <= 59){
        return("F");
    }
    else if(mark >= 60 && mark <= 69){
        return("D");
    }
    else if(mark >= 70 && mark <= 79){
        return("C");
    }
    else if(mark >= 80 && mark <= 89){
        return("B");
    }
    else if(mark >= 90 && mark <= 100){
        return("A");
    }
    else{
        return("Error - Please enter a number between 0 and 100.")
    }
}

/************************************************************** Stretch **************************************************************/
//Create a function that counts the number of vowels within a string. It should handle both capitalized and uncapitalized vowels.
// Hint - you may need to study tomorrow's traning kit on arrays 
// try looking up the .includes() method

function vowelCount(inputString){
    if(typeof inputString !== "string"){
        return("Error - please enter a string.")
    }
    let vowelArray = [];
    for(let i = 0; i < String(inputString).length; i++){
        vowelArray.push(inputString.charAt(i));
    }
    vowelArray = vowelArray.filter(isVowel);
    return(vowelArray.length);

    function isVowel(letter){
        if(String(letter).length !== 1){
            return undefined;
        }
        if(letter === "a" || letter === "A" || letter === "e" || letter === "E" || letter === "i" || letter === "I" || letter === "o" || letter === "O" || letter === "u" || letter === "U"){
            return true;
        }
        else{
            return false;
        }
    }
}

/************************************************************** Stretch **************************************************************/
//Take Rock, Paper, Sissors further
//update your rock papers sissors code below to take a prompt from a user using the window object

function rpsPrompt(){
    return(rpsGame(prompt("Please enter your choice")));
}