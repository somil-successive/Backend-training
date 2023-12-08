import express, { Application, NextFunction } from "express";
import fs from "fs";
import createError from "http-errors";
import errorHandlingMiddleware from "./middleware/errorHandlingMiddleware.js";
import { Request, Response } from "express";
import DataRouter from "./routes/dataRoutes.js";
import Connection from "./libs/databaseConnection.js";
import router from "./Modules/Users/routes.js";
import bRouter from "./Modules/Blogs/routes.js";

class App {
  private app: Application = express();
  private connection;

  private setRoutes = (): void => {
    const dataRouter: DataRouter = new DataRouter();
    this.app.use("/data", dataRouter.getRouter());
    this.app.use("/user", router);
    this.app.use("/blogs", bRouter);
  };

  private setErrorHandler = (): void => {
    this.app.use(errorHandlingMiddleware);
  };

  constructor() {
    this.connection = new Connection();
    this.app.use(express.json());
    this.setRoutes();
    this.setErrorHandler();
  }

  public startServer = async (PORT: number): Promise<void> => {
    await this.connection.connectDB();
    this.app.listen(PORT, () => {
      console.log(`server is running on PORT ${PORT}`);
    });
  };
}

export default new App();
