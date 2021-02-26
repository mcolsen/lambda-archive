// ==== Closures ==== 

/* Task 1: Study the code below and explain in your own words why nested function can access the variable internal. */


const external = "I'm outside the function";

function myFunction() {
	console.log(external);
	const internal = "Hello! I'm inside myFunction!";

	function nestedFunction() {
		console.log(internal);
	};
	nestedFunction();
}
myFunction();

// Explanation: 

// nestedFunction has access to internal because the closure being formed by the function includes both the function and the variables that were in scope at the time it was created. Since internal was created before and in the same scope as nestedFunction, the function has access to it. 


/* Task 2: Counter */

/* Create a function called `summation` that accepts a parameter and uses a counter to return the summation of that number. For example, `summation(4)` should return 10 because 1+2+3+4 is 10. */

function summation(n){
	let sum = 0; 
	for(let i = 0; i <= n; i++){
		sum += i; 
	}
	return sum;
}