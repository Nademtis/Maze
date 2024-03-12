"use strict"
export default class View {

    controller;

    constructor(controller) {
        this.controller = controller;

    }
    printMaze(maze, start, goal) {
        const gridContainer = document.querySelector("#grid_table");
        gridContainer.innerHTML = ""

        for (let r = 0; r < maze.length; r++) {
            const tr = document.createElement("tr")

            for (let c = 0; c < maze[r].length; c++) {
                const td = document.createElement("td")
                this.applyCss(maze, r, c, td, start, goal)
                tr.appendChild(td);
            }
            gridContainer.appendChild(tr);
        }

    }
    applyCss(maze, r, c, td, start, goal) {
        td.classList.add("cell")

        if (r == start.row && c == start.col) td.classList.add("visited")
        if (r == goal.row && c == goal.col) td.classList.add("goal")

        if (maze[r][c].north == true) td.classList.add("wallTop")
        if (maze[r][c].east == true) td.classList.add("wallRight")
        if (maze[r][c].west == true) td.classList.add("wallLeft")
        if (maze[r][c].south == true) td.classList.add("wallButtom")

    }
}