"use strict"

import Model from "../model/sModel.js"
import View from "../../view/view.js"

class Cell {
    constructor(r, c, visited) {
        this.row = r
        this.col = c
        this.visited = visited
    }
}

export default class sController {
    constructor() {
        this.model = new Model()
        this.view = new View(this)
    }
    async init(mazeJson) {  //if mazeJson is parsed with, it uses that maze instead of maze.json
        try {
            //init and print the maze
            let maze = await this.model.initMaze(mazeJson);
            this.view.printMaze(maze, this.model.route, this.model.start, this.model.goal)

            //start the blind depthFirst
            //await this.depthFirst(this.model.start.row, this.model.start.col)
            //this.view.printMaze(maze, this.model.route, this.model.start, this.model.goal)
            //console.log(this.model.route);

        } catch (error) {
            console.error(error);
        }
    }
    async solveMaze(){
        await this.depthFirst(this.model.start.row, this.model.start.col)
    }
    async depthFirst(row, col) {
        if (this.model.route.some(cell => cell.row === row && cell.col === col)) {
            //console.log("already visited");
            return false;
        }

        await new Promise(resolve => setTimeout(resolve, 1)); // for hyggens skyld

        const maze = this.model.maze; // for at slippe for at skrive this.model hver gang

        let cell = new Cell(row, col, true);
        this.model.route.push(cell);
        //console.log(this.model.route);

        this.view.printMaze(maze, this.model.route, this.model.start, this.model.goal); // print den nye rute

        if (cell.row == this.model.goal.row && cell.col == this.model.goal.col) {
            console.log("found goal!!");
            return true;
        }

        if (maze[row][col].north == false && await this.depthFirst(row - 1, col)) {
            //console.log("should move up");
            return true;
        }
        if (maze[row][col].east == false && await this.depthFirst(row, col + 1)) {
            //console.log("should move right");
            return true;
        }
        if (maze[row][col].south == false && await this.depthFirst(row + 1, col)) {
            //console.log("should move down");
            return true;
        }
        if (maze[row][col].west == false && await this.depthFirst(row, col - 1)) {
            //console.log("should move left");
            return true;
        }

        // hvis den ikke kan gå videre, så fjern forkert rute/celle fra route
        this.model.route.pop();
        //console.log("Backtrack from", row, col);
        return false;
    }

}

