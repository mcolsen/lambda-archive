import { fifaData } from './fifa.js';
console.log(fifaData);

console.log('its working');
// ⚽️ M  V P ⚽️ //

/* Task 1: Investigate the data above. Practice accessing data by console.log-ing the following pieces of data 

(a) Home Team name for 2014 world cup final
(b) Away Team name for 2014 world cup final
(c) Home Team goals for 2014 world cup final
(d) Away Team goals for 2014 world cup final
(e) Winner of 2014 world cup final */

let final2014 = fifaData.filter(function(object){
	return object.Year === 2014 && object.Stage === "Final";
})[0];

function addWinner(object){
	if(object["Home Team Goals"] > object["Away Team Goals"]){
		object.Winner = object["Home Team Name"];
		object["Winner Initials"] = object["Home Team Initials"];
	}
	else if(object["Home Team Goals"] < object["Away Team Goals"]){
		object.Winner = object["Away Team Name"];
		object["Winner Initials"] = object["Away Team Initials"];
	}
	else{
		object.Winner = "Tied";
	}
	return object;
}

final2014 = addWinner(final2014);
console.log("\nTask 1");
console.log("(a) " + final2014["Home Team Name"]);
console.log("(b) " + final2014["Away Team Name"]);
console.log("(c) " + final2014["Home Team Goals"]);
console.log("(d) " + final2014["Away Team Goals"]);
console.log("(e) " + final2014.Winner);

/* Task 2: Create a function called  getFinals that takes `data` as an argument and returns an array of objects with only finals data */

function getFinals(data){
	return data.filter(function(object){
		return object.Stage === "Final";
	});
};
console.log("\nTask 2");
console.log(getFinals(fifaData));

/* Task 3: Implement a higher-order function called `getYears` that accepts the callback function `getFinals`, and returns an array called `years` containing all of the years in the dataset */

function getYears(callback){
	let years = [];
	callback(fifaData).forEach(function(object){
		years.push(object.Year);
	});
	return years;
};
console.log("\nTask 3");
console.log(getYears(getFinals));

/* Task 4: Implement a higher-order function called `getWinners`, that accepts the callback function `getFinals()` and determine the winner (home or away) of each `finals` game. Return the name of all winning countries in an array called `winners` */ 

function getWinners(callback){
	let finalGames = callback(fifaData);
	finalGames.forEach(addWinner);
	let winners = [];
	finalGames.forEach(function(object){
		winners.push(object.Winner);
	});
	return winners;
}
console.log("\nTask 4");
console.log(getWinners(getFinals));

/* Task 5: Implement a higher-order function called `getWinnersByYear` that accepts the following parameters and returns a set of strings "In {year}, {country} won the world cup!" 

Parameters: 
 * callback function getWinners
 * callback function getYears
 */

function getWinnersByYear(winners, years){
	const w = winners(getFinals);
	const y = years(getFinals);
	let combinedData = [];
	for(let i = 0; i < w.length; i++){
		combinedData.push([w[i], y[i]]);
	}
	let strings = [];
	combinedData.forEach(function(item){
		strings.push(`In ${item[1]}, ${item[0]} won the world cup!`);
	});
	return strings;
}
console.log("\nTask 5");
console.log(getWinnersByYear(getWinners, getYears));

/* Task 6: Write a function called `getAverageGoals` that accepts a parameter `data` and returns the the average number of home team goals and away team goals scored per match (Hint: use .reduce and do this in 2 steps) */

function getAverageGoals(data){
	let avgs = {};
	avgs["Mean Home Team Goals"] = ((data.reduce(function(acc, cur){
		return acc + cur["Home Team Goals"];
	}, 0)) / data.length);
	avgs["Mean Away Team Goals"] = ((data.reduce(function(acc, cur){
		return acc + cur["Away Team Goals"];
	}, 0)) / data.length);
	return avgs;
}
console.log("\nTask 6");
console.log(getAverageGoals(fifaData));

/// STRETCH 🥅 //

/* Stretch 1: Create a function called `getCountryWins` that takes the parameters `data` and `team initials` and returns the number of world cup wins that country has had. 

Hint: Investigate your data to find "team initials"!
Hint: use `.reduce` */

function getCountryWins(data, initials) {
	data.forEach(addWinner);
	let wins = 0; 
	let champs = 0; 
	data.forEach(function(object){
		if (object["Winner Initials"] === initials){
			wins++;
			if(object.Stage === "Final"){
				champs++;
			}
		}
	});
	return `Total Games Won: ${wins}\nTotal Championships: ${champs}`;
};
console.log("\nStretch 1");
console.log(getCountryWins(fifaData, "ENG"));

/* Stretch 3: Write a function called getGoals() that accepts a parameter `data` and returns the team with the most goals score per appearance (average goals for) in the World Cup finals */

function getGoals(data){
	let finals = getFinals(data);
	let teams = [];
	finals.forEach(function(object){
		if(!teams.includes(object["Home Team Name"])){
			teams.push(object["Home Team Name"]);
		}
		if(!teams.includes(object["Away Team Name"])){
			teams.push(object["Away Team Name"]);
		} 
	});

	let finalStats = [];
	teams.forEach(function(item){
		let appear = finals.filter(function(object){
			return object["Home Team Name"] === item || object["Away Team Name"] === item;
		});
		let totalGoals = finals.reduce(function(acc, cur){
			let goals;
			if(cur["Home Team Name"] === item){
				goals = cur["Home Team Goals"];
			}
			else if(cur["Away Team Name"] === item){
				goals = cur["Away Team Goals"];
			}
			else{
				goals = 0; 
			}
			return acc + goals;
		}, 0);
		finalStats.push(
			{"Team": item,
			"Avg": totalGoals / appear.length}
		);
	});

	let bestTeam = [{"Team": "Dummy", "Avg": 0}]; 
	finalStats.forEach(function(object){
		if(object.Avg === bestTeam[0].Avg){
			bestTeam.push(object);
		}
		else if(object.Avg > bestTeam[0].Avg){
			bestTeam[0] = object;
		}
	});

	let teamString = ``;
	bestTeam.forEach(function(object, index, array){
		if(index === array.length - 1){
			teamString = teamString.concat(array[index].Team);
		}
		else{
			teamString = teamString.concat(`${array[index].Team} & `);
		}
	})
	return teamString;
};
console.log("\nStretch 3");
console.log(getGoals(fifaData));

/* Stretch 4: Write a function called badDefense() that accepts a parameter `data` and calculates the team with the most goals scored against them per appearance (average goals against) in the World Cup finals */

function badDefense(data){
	let finals = getFinals(data);
	let teams = [];
	finals.forEach(function(object){
		if(!teams.includes(object["Home Team Name"])){
			teams.push(object["Home Team Name"]);
		}
		if(!teams.includes(object["Away Team Name"])){
			teams.push(object["Away Team Name"]);
		} 
	});

	let finalStats = [];
	teams.forEach(function(item){
		let appear = finals.filter(function(object){
			return object["Home Team Name"] === item || object["Away Team Name"] === item;
		});
		let totalOppGoals = finals.reduce(function(acc, cur){
			let oppGoals;
			if(cur["Home Team Name"] === item){
				oppGoals = cur["Away Team Goals"];
			}
			else if(cur["Away Team Name"] === item){
				oppGoals = cur["Home Team Goals"];
			}
			else{
				oppGoals = 0; 
			}
			return acc + oppGoals;
		}, 0);
		finalStats.push(
			{"Team": item,
			"AvgOppGoals": totalOppGoals / appear.length}
		);
	});

	let worstTeam = [{"Team": "Dummy", "AvgOppGoals": 0}]; 
	finalStats.forEach(function(object){
		if(object.AvgOppGoals === worstTeam[0].AvgOppGoals){
			worstTeam.push(object);
		}
		else if(object.AvgOppGoals > worstTeam[0].AvgOppGoals){
			worstTeam[0] = object;
		}
	});

	let teamString = ``;
	worstTeam.forEach(function(object, index, array){
		if(index === array.length - 1){
			teamString = teamString.concat(array[index].Team);
		}
		else{
			teamString = teamString.concat(`${array[index].Team} & `);
		}
	})
	return teamString;
};
console.log("\nStretch 4");
console.log(badDefense(fifaData));

/* If you still have time, use the space below to work on any stretch goals of your chosing as listed in the README file. */
