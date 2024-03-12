"use strict"
import gModel from "../model/gModel.js"
export default class gController {
    constructor() {
        this.model = new gModel()
        //this.view = new View(this)
    }
    sayHello(){
        console.log("gController says hi");
    }
    
}