"use strict"

import Model from "../model/model.js"
import View from "../view/view.js"

export default class Controller {
    constructor() {
        this.model = new Model()
        this.view = new View(this)
    }
    async init() {
        try {
            let maze = await this.model.initMaze();
            this.view.printMaze(maze, this.model.start, this.model.goal)
            console.log(maze);

        } catch (error) {
            console.error(error);
        }
    }

}