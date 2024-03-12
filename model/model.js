export default class Model {
    constructor() {
        this.jsonFilePath = './model/maze.json';
        this.rowAmount = 2
        this.colAmount = 0
        this.start = [{ "row": 0, "col": 0 }]
        this.goal = [{ "row": 3, "col": 6 }]
        this.maze = [[]]
        this.route = []
    }
    addToRoute(cell){
        this.route.push(cell)
    }

    async initMaze() {
        let json = await this.readJsonFile()
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