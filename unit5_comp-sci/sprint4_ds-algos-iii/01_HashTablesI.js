// Task 4
function csFindTheSingleNumber(nums) {
	let uq = new Set(nums)
	
	const dupes = new Set(
	nums.filter(n => {
			if(uq.has(n)){
					uq.delete(n)
					return false 
			} else {
					return true 
			}
	}))
	
	uq = new Set(nums)
	for(const n of uq.values()){
			if(!dupes.has(n)){
					return n
			}
	}
}


// Task 5
function csAverageOfTopFive(scores) {
	const students = new Map()
	
	scores.forEach(s => {
			const id = s[0]
			const score = s[1]
			
			if(students.has(id)){
					students.set(id, [...students.get(id), score])
			} else {
					students.set(id, [score])
			}
	})
			
	const avgs = []
	students.forEach((scores, id) => {
			const top = scores.sort((x, y) => x - y).slice(scores.length - 5)
			avgs.push([id, Math.floor(top.reduce((acc, cur) => acc += cur) / top.length)])
	})
	
	return avgs 
}


// Task 6
function csMaxNumberOfLambdas(text) {
	const count = {l: 0, a: 0, m: 0, b: 0, d: 0}
	
	text.split("").forEach(char => {
			if(count[char] !== undefined){
					count[char]++
			}
	})
	
	count.a = count.a / 2
	
	return Math.min(...Object.values(count))
}
