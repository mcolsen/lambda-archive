// Task 5
function csFindAllPathsFromAToB(graph) {
    const b = graph.length - 1
    const paths = []
    console.log(b)

    const findPaths = (vert = 0, hist = []) => {
        hist.push(vert)

        if(vert === b){
            paths.push(hist)
            return
        }

        graph[vert].forEach(e => {
            findPaths(e, [...hist])
        })
    }

    findPaths()
    return paths
}
