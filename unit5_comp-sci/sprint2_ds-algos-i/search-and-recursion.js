// Task 5
function fibonacciSimpleSum2(n) {
    const fib = (limit) => {
        const calc = (prev, cur, seq) => {
            let next = prev + cur
            if(next > limit){
                return [...seq, cur]
            } else {
                return calc(cur, next, [...seq, cur])
            }
        }

        return calc(0, 1, [0])
    }

    const fibSeq = fib(n)
    while(fibSeq.length > 0){
        const x = fibSeq.pop()
        if(x * 2 === n || x === n){
            return true
        }
        const target = n - x
        let min = 0
        let max = fibSeq.length - 1
        while(min <= max){
            const guess = Math.round((min + max) / 2)
            if(fibSeq[guess] === target){
                return true
            } else if(target > fibSeq[guess]){
                min = guess + 1
            } else {
                max = guess - 1
            }
        }
    }
    return false
}

// Task 6
function csBinarySearch(nums, target) {
    let min = 0
    let max = nums.length - 1
    while(min <= max){
        const guess = Math.round((min + max) / 2)
        if(nums[guess] === target){
            return guess
        } else if(target > nums[guess]){
            min = guess + 1
        } else if(target < nums[guess]){
            max = guess - 1
        }
    }
    return -1
}

// Task 7
function csSearchRotatedSortedArray(nums, target) {
    if(target > nums.length){
        return -1
    }

    let pivot = nums[nums.length - 1]
    if(target <= pivot){
        return nums.length - (pivot - target) - 1
    } else {
        return target - pivot - 1
    }
}
