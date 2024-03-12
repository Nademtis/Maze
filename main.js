"use strict"

import Controller from "./solver/controller/controller.js";

window.addEventListener("load", start);

const controller = new Controller()
function start() {
    controller.init()
}
