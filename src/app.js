import express from "express";
import dataRoutes from "./routes/dataRoutes.js";
import { errorHandlingMiddleware } from "./middleware/errorHandlingMiddleware.js";
import { dataSeederController } from "./controllers/dataSeederController.js";
import { configurations } from "./utils/config.js";

const app = express();

app.use(express.json());
app.use("/data", dataRoutes);
app.post("/api", dataSeederController);
app.use(errorHandlingMiddleware);

app.listen(configurations.port, () => {
  console.log(`serveris running at port ${configurations.port}`);
});
