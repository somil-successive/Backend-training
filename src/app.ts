import express, { Application } from "express";
import errorHandlingMiddleware from "./middleware/errorHandlingMiddleware";
import DataRouter from "./routes/dataRoutes";
import Connection from "./libs/databaseConnection";
import router from "./Modules/Users/routes";
import swaggerUi from "swagger-ui-express";
import bRouter from "./Modules/Blogs/routes";
import cors from "cors";
import swaggerSpec from "./swaggerConfig";

class App {
  private app: Application = express();
  public connection;

  private setRoutes = (): void => {
    const dataRouter: DataRouter = new DataRouter();
    this.app.use("/data", dataRouter.getRouter());
    this.app.use("/user", router);
    this.app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
    this.app.use("/blogs", bRouter);
  };

  private setErrorHandler = (): void => {
    this.app.use(errorHandlingMiddleware);
  };

  public getApp = (): Application => {
    return this.app;
  };
  

  constructor() {
    this.connection = new Connection();
    this.app.use(cors());
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: true }));
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
