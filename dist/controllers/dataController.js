"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mockData_1 = require("../utils/mockData");
class DataController {
    constructor() {
        this.getData = (req, res) => {
            res.json(mockData_1.data);
        };
        this.postData = (req, res) => {
            const newD = req.body;
            mockData_1.data.push(newD);
            res.send(mockData_1.data);
        };
    }
}
exports.default = DataController;
