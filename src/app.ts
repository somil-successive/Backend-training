import express, { NextFunction } from "express";
import {dataRouter} from "./routes/dataRoutes";
import fs from "fs";
import createError from "http-errors";
import { errorHandlingMiddleware } from "./middleware/errorHandlingMiddleware";
import { Request, Response } from "express";
const app = express();

app.use(express.json());

app.post("/api", function (req: Request, res: Response) {
  console.log(req.body);
  const { name } = req.body;
  console.log(typeof name);
  fs.appendFile("./src/utils/dataSeeder.js", name, (err) => {
    console.log(err);
  });
  res.json(req.body);
});

app.use("/data", dataRouter);
app.use(errorHandlingMiddleware);

app.listen(4000, () => {
  console.log("server is running at port 4000");
});
