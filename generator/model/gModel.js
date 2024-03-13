export default class gModel {

    constructor() {
        this.maze = [[]]
    }

    initMaze(rowAmount, colAmount) {
        for (let r = 0; r < rowAmount; r++) {
            this.maze[r] = [colAmount]
            for (let c = 0; c < colAmount; c++) {
                this.maze[r][c] = { row: r, col: c, north: true, east: true, west: true, south: true, }
                this.maze[r][c].visited = false //mark all cells as unvisited
            }
        }
        
    }
    getRandomUnvisitedCell() {
        let randomRowIndex = Math.floor(Math.random() * this.maze.length)
        let randomColIndex = Math.floor(Math.random() * this.maze[0].length)


        if (this.maze[randomRowIndex][randomColIndex].visited == true) {
            console.log(randomRowIndex + " " + randomColIndex + " has been visited before");
        } else {
            //this.maze[randomRowIndex][randomColIndex].visited = true // should probably not visit here
            //console.log(randomRowIndex + " " + randomColIndex);
            return { row: randomRowIndex, col: randomColIndex }
        }
    }
    allCellsAreVisited() {
        for (let r = 0; r < this.maze.length; r++) {
            for (let c = 0; c < this.maze[r].length; c++) {
                if (this.maze[r][c].visited == false)
                    return false
            }
        }
        return true
    }
    getRandomUnvisitedNeighbor(r, c) {
        const direction = [
            { row: r - 1, col: c }, // up
            { row: r, col: c + 1 }, // right
            { row: r + 1, col: c }, // down
            { row: r, col: c - 1 }  // left
        ];

        //fik denne shuffle metode fra chatGPT
        for (let i = direction.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [direction[i], direction[j]] = [direction[j], direction[i]];
        }

        for (const dir of direction) {
            const row = dir.row
            const col = dir.col

            //check if neighbor is visited and within maze
            if (row >= 0 && row < this.maze.length && col >= 0 && col < this.maze[0].length) {

                if (this.maze[row][col].visited == false) { // Check if the neighbor is unvisited
                    return dir;
                } else {
                    console.log("This cell has  been visited before");
                }
            }
        }
    }

    visitCell(r, c) {
        this.maze[r][c].visited = true
    }
    unVisitCell(r, c) {
        this.maze[r][c].visited = false
    }
}