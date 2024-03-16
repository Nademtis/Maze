"use strict"

import gController from "./generator/controller/gController.js";
import sController from "./solver/controller/sController.js";

window.addEventListener("load", start);

const solveController = new sController()
const generationController = new gController()

function start() {
    generationController.wilsons()
    let mazeJson = generationController.packIntoJson();


    solveController.init(mazeJson) //if mazeJson is parsed with, it uses that maze instead of maze.json
    //solveController.init() //if mazeJson is parsed with, it uses that maze instead of maze.json
}
