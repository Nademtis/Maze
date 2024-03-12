"use strict"

import gController from "./generator/controller/gController.js";
import sController from "./solver/controller/sController.js";

window.addEventListener("load", start);

const solveController = new sController()
const generationController = new gController()

function start() {
    generationController.sayHello()
    //generationController should make a new maze
    //when it's done - the solveController takes over

    solveController.init()
}
