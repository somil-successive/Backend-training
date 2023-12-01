import express from "express";
import dataRoutes from "./routes/dataRoutes.js";
import fs from "fs";
import { errorHandlingMiddleware } from "./middleware/errorHandlingMiddleware.js";
import { dataSeederController } from "./controllers/dataSeederController.js";
const app = express();
app.use(express.json());

app.post("/api", dataSeederController);

app.use("/data", dataRoutes);

app.use(errorHandlingMiddleware);

app.listen(4000, () => {
  console.log("serveris running at port 4000");
});
