"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.postData = exports.getData = void 0;
const mockData_1 = require("../utils/mockData");
const getData = (req, res) => {
    res.json(mockData_1.data);
};
exports.getData = getData;
const postData = (req, res) => {
    const newD = req.body;
    mockData_1.data.push(newD);
    res.send(mockData_1.data);
};
exports.postData = postData;
