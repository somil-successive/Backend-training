import DataController from "../controllers/dataController";
import customLogsMiddleware from "../middleware/customLogsMiddleware";
import limitingReqMiddleware from "../middleware/limitingReqMiddleware";
import dynamicValidationMiddleware from "../middleware/dynamicValidationMiddleware";
import loginController from "../controllers/loginController";
import registerController from "../controllers/registerController";
import asyncController from "../controllers/asyncController";
import validationMiddleware from "../middleware/validationMiddleware";
import healthCheckController from "../controllers/healthCheckController";
import CustomHeaderMiddleware from "../middleware/customHeaderMiddleware";
import { Router } from "express";

class DataRouter {
  private router: Router = Router();

  private initializeRoutes = (): void => {
    this.router.get("/get", new DataController().getData);

    this.router.post(
      "/post",
      limitingReqMiddleware,
      new CustomHeaderMiddleware({ Coontent: "html" }).customHeaderMiddleware,
      customLogsMiddleware,
      validationMiddleware,
      new DataController().postData
    );

    this.router.post("/login", loginController);
    this.router.post(
      "/register",
      dynamicValidationMiddleware,
      registerController
    );
    this.router.get("/async", asyncController);
    this.router.get("/health", healthCheckController);
  };

  constructor() {
    this.initializeRoutes();
  }

  public getRouter = (): Router => {
    return this.router;
  };
}
export default DataRouter;
