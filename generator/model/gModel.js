export default class gModel {

    constructor() {
        this.maze = [[]]
    }

    initMaze(rowAmount, colAmount) {
        for (let r = 0; r < rowAmount; r++) {
            this.maze[r] = [colAmount]
            for (let c = 0; c < colAmount; c++) {
                this.maze[r][c] = {row: r, col: c, north: true, east: true, west: true, south: true, }
                this.maze[r][c].visited = false //mark all cells as unvisited
            }
        }
        
    }
}