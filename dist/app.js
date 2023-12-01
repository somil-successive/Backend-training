import express from "express";
import dataRoutes from "./routes/dataRoutes.js";
import fs from "fs";
import createError from "http-errors";
import { errorHandlingMiddleware } from "./middleware/errorHandlingMiddleware.js";
const app = express();
app.use(express.json());
app.post("/api", function (req, res) {
    console.log(req.body);
    const { name } = req.body;
    console.log(typeof name);
    fs.appendFile("./src/utils/dataSeeder.js", name, (err) => {
        console.log(err);
    });
    res.json(req.body);
});
app.use("/data", dataRoutes);
app.use("/", (req, res, next) => {
    return next(createError(404, "Not found"));
});
app.use((err, req, res, next) => {
    res.status(err.status).send(err.message);
});
app.use(errorHandlingMiddleware);
app.listen(4000, () => {
    console.log("server is running at port 4000");
});
