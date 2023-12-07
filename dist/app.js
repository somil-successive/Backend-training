"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dataRoutes_1 = require("./routes/dataRoutes");
const fs_1 = __importDefault(require("fs"));
const errorHandlingMiddleware_1 = require("./middleware/errorHandlingMiddleware");
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.post("/api", function (req, res) {
    console.log(req.body);
    const { name } = req.body;
    console.log(typeof name);
    fs_1.default.appendFile("./src/utils/dataSeeder.js", name, (err) => {
        console.log(err);
    });
    res.json(req.body);
});
app.use("/data", dataRoutes_1.dataRouter);
app.use(errorHandlingMiddleware_1.errorHandlingMiddleware);
app.listen(4000, () => {
    console.log("server is running at port 4000");
});
