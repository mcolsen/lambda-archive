// Task 1
function condense_linked_list(node) {
	/* Singly-linked lists are already defined with this interface:
	function ListNode(x) {
	  this.value = x;
	  this.next = null;
	}
	*/
	
	const integers = new Set()

	let cur = node 
	while(cur !== null){
			integers.add(cur.value)
			cur = cur.next 
	}
	
	const listFromArray = ar => {
			const ln = new ListNode(ar.shift())
			ln.next = ar.length ? listFromArray(ar) : null 
			return ln 
	}
	
	return listFromArray([...integers])
}


// Task 2
function first_not_repeating_character(s) {
	for(let i = 0; i < s.length; i++){
			if(s.indexOf(s[i]) === s.lastIndexOf(s[i])){
					return s[i]
			}
	}
	return "_"
}

// Task 3
function uncover_spy(n, trust) {
	const citizens = {}
	
	for(let i = 1; i <= n; i++){
			// [0] - # of others trusted by citizen 
			// [1] - # of others who trust citizen 
			citizens[i] = [0, 0]
	}
	
	trust.forEach(pair => {
			citizens[pair[0]][0]++
			citizens[pair[1]][1]++
	})
	
	for(let i = 1; i <= n; i++){
			if(citizens[i][0] === 0 && citizens[i][1] === n - 1){
					return i 
			}
	}
	
	return -1 
}
