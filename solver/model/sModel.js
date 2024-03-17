export default class Model {
    constructor() {
        this.jsonFilePath = "maze.json";
        this.rowAmount = 0
        this.colAmount = 0
        this.start = [{ "row": 0, "col": 0 }]
        this.goal = [{ "row": 3, "col": 6 }]
        this.maze = [[]]
        this.route = []
    }
    addToRoute(cell) {
        this.route.push(cell)
    }
    resetMaze(){
        this.jsonFilePath = "maze.json";
        this.rowAmount = 0
        this.colAmount = 0
        this.start = [{ "row": 0, "col": 0 }]
        this.goal = [{ "row": 3, "col": 6 }]
        this.maze = [[]]
        this.route = []
    }

    async initMaze(mazeJson) {
        this.resetMaze()
        let json
        if (mazeJson) {
            json = mazeJson  //if mazeJson is parsed with, it uses that maze instead of maze.json
        } else {
            json = await this.readJsonFile()
        }
        this.rowAmount = json.rows
        this.colAmount = json.cols
        this.start = json.start
        this.goal = json.goal
        this.maze = json.maze
        return this.maze
    }
    async readJsonFile() {
        try {
            const response = await fetch(this.jsonFilePath);

            if (!response.ok) {
                throw new Error(`Failed to fetch from ${this.jsonFilePath}`);
            }

            const jsonData = await response.json();
            return jsonData;
        } catch (error) {
            console.error(error);
        }
    }
}