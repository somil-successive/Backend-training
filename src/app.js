import express from "express";
import dataRouter from "./routes/dataRoutes.js";
import fs from "fs";
import { errorHandlingMiddleware } from "./middleware/errorHandlingMiddleware.js";
import { dataSeederController } from "./controllers/dataSeederController.js";
import { configurations } from "./utils/config.js";
const app = express();
app.use(express.json());

app.post("/abc", dataSeederController);

app.use("/data", dataRouter);

// app.use(errorHandlingMiddleware);

app.listen(configurations.port, () => {
  console.log(`serveris running at port ${configurations.port}`);
});
