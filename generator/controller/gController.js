"use strict"
import gModel from "../model/gModel.js"
export default class gController {
    constructor() {
        this.model = new gModel()
        //this.view = new View(this)

    }
    sayHello() {
        console.log("gController says hi");
    }
    wilsons() {

        this.model.initMaze(20, 20) //init grid
        //console.log(this.model.maze);

        let firstCell = this.model.getRandomUnvisitedCell() //choose random start
        this.model.visitCell(firstCell.row, firstCell.col)  // mark as visited


        
        let neighbor = this.model.getRandomUnvisitedCell()  //choose random unvisited cell in grid
        let randomWalk = [neighbor] //randomWalk is a list of cells from neighbor to any visited cell

        console.log(firstCell);
        console.log(neighbor);

        do {
            neighbor = this.model.getRandomUnvisitedNeighbor(neighbor.row, neighbor.col)

            //check if neighbor is already in randomWalk List
            for (let i = 0; i < randomWalk.length; i++) {
                if (randomWalk[i].row == neighbor.row && randomWalk[i].col == neighbor.col) {
                    //if yes, remove from that index until this index
                    //console.log("hit the same");
                    randomWalk.length = i //cut the extra
                }
            }
            randomWalk.push(neighbor)
            if (this.model.maze[neighbor.row][neighbor.col].visited) {
                console.log("hit firstCell");
            }
        } while (this.model.maze[neighbor.row][neighbor.col].visited == false)
        //while (neighbor.row !== firstCell.row || neighbor.col !== firstCell.col) //This works with just firstWalk
        // this.model.maze[neighbor.row][neighbor.col].visited == false

        //in random walk, remove walls between cells (remember to remove the walls on both cells)
        for (const cell of randomWalk) {
            this.model.maze[cell.row][cell.col].visited = true
        }

        console.log(randomWalk);


        //this for-loop removes walls, there are 2 lines in each if- because walls needs to be removed on both adjacent cells
        for (let i = 0; i < randomWalk.length - 1; i++) {
            let nextCell = randomWalk[i + 1]

            //next is east
            if (randomWalk[i].col < nextCell.col) {
                this.model.maze[randomWalk[i].row][randomWalk[i].col].east = false
                this.model.maze[nextCell.row][nextCell.col].west = false
            }
            //next is west
            if (randomWalk[i].col > nextCell.col) {
                this.model.maze[randomWalk[i].row][randomWalk[i].col].west = false
                this.model.maze[nextCell.row][nextCell.col].east = false
            }
            //next is north
            if (randomWalk[i].row > nextCell.row) {
                this.model.maze[randomWalk[i].row][randomWalk[i].col].north = false
                this.model.maze[nextCell.row][nextCell.col].south = false
            }
            //next is south
            if (randomWalk[i].row < nextCell.row) {
                this.model.maze[randomWalk[i].row][randomWalk[i].col].south = false
                this.model.maze[nextCell.row][nextCell.col].north = false
            }
            

        }



        //repeat until all cells are visited

        //choose random start and end. (all the cells er connected with this algorithm- nice)

        this.packIntoJson()
    }
    packIntoJson() {
        //TODO remember to: 
        const mazeJson = {
            rows: this.model.maze.length,
            cols: this.model.maze[0].length,
            start: { row: 0, col: 0 }, //harcode to topLeft
            goal: { row: this.model.maze.length - 1, col: this.model.maze[0].length - 1 }, //harcode to buttomRight
            maze: this.model.maze
        };
        //console.log(JSON.stringify(mazeJson, null, 1));
        return mazeJson
    }
    tick() {
        setTimeout(() => {
            console.log("tick");
            //this.model.getRandomUnvisitedCell();
            this.tick(); // Call tick again to schedule the next iteration
        }, 1000); // 1000 milliseconds = 1 second
    }

}