import express, { Application } from "express";
import DataRouter from "./routes/dataRoutes";
import ErrorHandlingMiddleware from "./middleware/errorHandlingMiddleware";

class App {
  private app: Application = express();
  private errorHandlingObj = new ErrorHandlingMiddleware();

  constructor() {
    this.app.use(express.json());
    this.setRoutes();
    this.setErrorHandler();
  }

  private setRoutes = (): void => {
    const dataRouter: DataRouter = new DataRouter();
    this.app.use("/data", dataRouter.getRouter());
  };

  private setErrorHandler = (): void => {
    this.app.use(this.errorHandlingObj.errorHandlingMiddleware);
  };

  public startServer = (PORT: number): void => {
    this.app.listen(PORT, () => {
      console.log(`server is running on PORT ${PORT}`);
    });
  };
}

export default App;
