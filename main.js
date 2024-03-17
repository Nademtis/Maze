"use strict"

import gController from "./generator/controller/gController.js";
import sController from "./solver/controller/sController.js";

const solveController = new sController()
const generationController = new gController()
let mazeJson

//when user has written width, height and press submit
document.getElementById("generateNewMazeForm").addEventListener("submit", function (event) {
    event.preventDefault();
    generateMaze();
});

//when user has written width, height and press submit
document.getElementById("startSolving").addEventListener("submit", function (event) {
    event.preventDefault();
    solveMaze()
});

/*function start() {
    generationController.wilsons()
    let mazeJson = generationController.packIntoJson();


    solveController.init(mazeJson) //if mazeJson is parsed with, it uses that maze instead of maze.json
    //solveController.init() //if mazeJson is parsed with, it uses that maze instead of maze.json

}*/

function generateMaze() {
    const height = document.querySelector(".inputHeight").value;
    const width = document.querySelector(".inputWidth").value;

    //console.log("Height:", height);
    //console.log("Width:", width);

    generationController.wilsons(width, height)
    mazeJson = generationController.packIntoJson();

    solveController.init(mazeJson)
}

function solveMaze(){
    console.log("should solve");
    solveController.solveMaze()
}

