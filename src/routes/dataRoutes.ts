import express, { Router } from "express";
import authMiddleware from "../middleware/authMiddleware";
import DataController from "../controllers/dataController";
import customLogsMiddleware from "../middleware/customLogsMiddleware";
import limitingReqMiddleware from "../middleware/limitingReqMiddleware";
import checkNumParamMiddleware from "../middleware/checkNumParamMiddleware";
import geoLocMiddleware from "../middleware/geoLocMiddleware";
import dynamicValidationMiddleware from "../middleware/dynamicValidationMiddleware";
import loginController from "../controllers/loginController";
import registerController from "../controllers/registerController";
import paramValidationMiddleware from "../middleware/paramValidationMiddleware";
import asyncController from "../controllers/asyncController";
import validationMiddleware from "../middleware/validationMiddleware";
import healthCheckController from "../controllers/healthCheckController";
import CustomHeaderMiddleware from "../middleware/customHeaderMiddleware";
import paramController from "../controllers/paramController";

class DataRouter {
  private router: Router = Router();

  private initializeRoutes = (): void => {
    this.router.get(
      "/get",
      paramValidationMiddleware,
      geoLocMiddleware,
      limitingReqMiddleware,
      new CustomHeaderMiddleware({ Cooooontent: "txt" }).customHeaderMiddleware,
      customLogsMiddleware,
      authMiddleware,
      checkNumParamMiddleware,
      new DataController().getData
    );

    this.router.post(
      "/post",
      limitingReqMiddleware,
      new CustomHeaderMiddleware({ Coontent: "html" }).customHeaderMiddleware,
      customLogsMiddleware,
      authMiddleware,
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
    this.router.get("/:id", paramValidationMiddleware, paramController);
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
