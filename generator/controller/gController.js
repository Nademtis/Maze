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
        //init grid
        this.model.initMaze(8, 8)
        //console.log(this.model.maze);

        //make this into JSON to test
        

        
        //choose random start - mark as visited

        //choose random unvisited cell in grid = randCell
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
}