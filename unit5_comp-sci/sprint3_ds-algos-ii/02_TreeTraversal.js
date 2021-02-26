// Task 7
function binaryTreeInOrderTraversal(root) {
    const ar = []

    const traverse = (node) => {
        if(node === null){
            return
        }

        traverse(node.left)
        ar.push(node.value)
        traverse(node.right)

    }

    traverse(root)

    return ar
}

// Task 8
function traverseTree(t) {
    if(t === null){
        return []
    }

    const res = []
    const queue = []
    queue.push(t)

    while(queue.length){
        node = queue.shift()
        res.push(node.value)

        node.left && queue.push(node.left)
        node.right && queue.push(node.right)
    }

    return res
}


// Task 9
function treePaths(t) {
    const ar = []

    const traverse = (node, string = "") => {
        if(node === null){
            return
        }

        if(node.left === null && node.right === null){
            ar.push(string.concat(`${node.value}`))
            return
        }

        node.left && traverse(node.left, string.concat(`${node.value}->`))
        node.right && traverse(node.right,  string.concat(`${node.value}->`))
    }

    traverse(t)
    return ar
}
