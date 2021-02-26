// Task 4
function csFriendCircles(friendships) {
	const circles = []
	
	friendships.forEach((student, i) => {
			student.forEach((friend, j) => {
					if(friend === 0){
							return 
					}
					const circleIndex = circles.findIndex(set => set.has(j) || set.has(i))
					if(circleIndex === -1){
							circles.push(new Set([j]))
					} else {
							circles[circleIndex].add(j)
					}
			})
	})
	
	return circles.length 
}
