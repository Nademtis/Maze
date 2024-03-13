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

        this.model.initMaze(5, 5) //init grid
        //console.log(this.model.maze);

        /*do {
            this.model.getRandomUnvisitedCell()

        }while(!this.model.allCellsAreVisited())*/
        let firstCell = this.model.getRandomUnvisitedCell() //choose random start
        console.log(firstCell);
        //this.model.visitCell(firstCell.row, firstCell.col)  // mark as visited

        let randCell = this.model.getRandomUnvisitedCell()  //choose random unvisited cell in grid = randCell
        console.log(randCell);
        let randomWalk = [randCell]
        let neighbor

        //console.log(neighbor);

        do {
            neighbor = this.model.getRandomUnvisitedNeighbor(randCell.row, randCell.col)
            randomWalk.push(neighbor)
            randCell = neighbor
        } while (randCell.row !== firstCell.row || randCell.col !== firstCell.col) //this should be: while (neighbor is not randomWalk[0])
        

        for (const cell of randomWalk){
            this.model.maze[cell.row][cell.col].visited = true
        }
        console.log(randomWalk);
        //this.model.visitCell(randCell.row, randCell.col)
        //this.model.visitCell(neighbor.row, neighbor.col)


        //perform random walk from randCell to any visited cell ()




        //in random walk, remove walls between cells (remember to remove the walls on both cells)
        //mark all the traversed cells as visited

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