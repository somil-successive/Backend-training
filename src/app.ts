import express, { NextFunction } from "express";
import dataRoutes from "./routes/dataRoutes.js";
import fs from "fs";
import createError from "http-errors";
import { errorHandlingMiddleware } from "./middleware/errorHandlingMiddleware.js";
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

app.use("/data", dataRoutes);

app.use("/", (req: Request, res: Response, next: NextFunction) => {
  return next(createError(404, "Not found"));
});

app.use((err: any, req: Request, res: Response, next: NextFunction) => {
  res.status(err.status).send(err.message);
});
app.use(errorHandlingMiddleware);

app.listen(4000, () => {
  console.log("server is running at port 4000");
});
