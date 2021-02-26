// Task 3 
function csIsomorphicStrings(a, b) {
	if(a.length !== b.length){
			return false 
	}
	
	const iso = new Map()
	
	for(let i = 0; i < a.length; i++){
			if(iso.has(a[i])){
					if(iso.get(a[i]) !== b[i]){
							return false 
					}
			} else {
					iso.set(a[i], b[i])
			}
	}
	
	return true 
}

// Task 4 
function csWordPattern(pattern, a) {
	a = a.split(" ")
	const match = new Map()
	
	if(a.length !== pattern.length){
			return false 
	}
	
	for(let i = 0; i < pattern.length; i++){
			if(match.has(pattern[i])){
					if(match.get(pattern[i]) !== a[i]){
							return false 
					}
			} else {
					match.set(pattern[i], a[i])
			}
	}
	
	if([...match.values()].length !== new Set([...match.values()]).size){
			return false 
	}
	
	return true 
}

// Task 5 
function csGroupAnagrams(strs) {
	const alpha = strs.map(s => s.split("").sort().join(""))
	
	const indices = new Map()
	const anagrams = []
	alpha.forEach((s, i) => {
			if(indices.has(s)){
					anagrams[indices.get(s)].push(strs[i])
			} else {
					indices.set(s, anagrams.length)
					anagrams.push([strs[i]])
			}
	})
	
	return anagrams 
}
