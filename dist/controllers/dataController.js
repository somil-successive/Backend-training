import data from "../utils/mockData.js";
class DataController {
    constructor() {
        this.getData = (req, res) => {
            res.json(data);
        };
        this.postData = (req, res) => {
            const newD = req.body;
            data.push(newD);
            res.send(data);
        };
    }
}
export default DataController;
