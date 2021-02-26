// Task 4
function balancedBinaryTree(root) {
    const traverse = (node, depth = 0) => {
        if(node === null){
            return depth
        }

        const l = traverse(node.left, depth + 1)
        const r = traverse(node.right, depth + 1)

        if(depth === 0){
            const ar = [...new Set([l, r].flat())]
            if(Math.max(...ar) - Math.min(...ar) <= 1){
                return true
            } else {
                return false
            }
        }

        const ar = [l, r].flat()
        return ar
    }
    return traverse(root)
}

// Task 5
function minimumDepthBinaryTree(root) {
    const traverse = (node, depth = 1) => {
        if(node.left === null && node.right === null){
            return depth
        }

        const l = node.left ? traverse(node.left, depth + 1) : null
        const r = node.right ? traverse(node.right, depth + 1) : null

        let ar = []
        if(l !== null){
            ar.push(l)
        }
        if(r !== null){
            ar.push(r)
        }
        ar = ar.flat()

        if(depth === 1){
            return Math.min(...ar)
        } else {
            return ar
        }
    }

    return traverse(root)
}
