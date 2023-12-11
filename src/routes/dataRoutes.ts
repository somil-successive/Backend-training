import { Router } from "express";
import DataController from "../controllers/dataController";
import CustomHeaderMiddleware from "../middleware/customHeaderMiddleware";
import AsyncController from "../controllers/asyncController";
import HealthCheckController from "../controllers/healthCheckController";
import LoginController from "../controllers/loginController";
import ParamController from "../controllers/paramController";
import RegisterController from "../controllers/registerController";
import AuthMiddlewarwe from "../middleware/authMiddleware";
import CheckNumParamMiddleware from "../middleware/checkNumParamMiddleware";
import CustomLogsMiddleware from "../middleware/customLogsMiddleware";
import DynamicValidationMiddleware from "../middleware/dynamicValidationMiddleware";
import GeoLocationMiddleware from "../middleware/geoLocMiddleware";
import LimitingReqMiddleware from "../middleware/limitingReqMiddleware";
import ParamValidationMiddleware from "../middleware/paramValidationMiddleware";
import ValidationMiddleware from "../middleware/validationMiddleware";

class DataRouter {
  private router: Router = Router();
  private async = new AsyncController();
  private dataController = new DataController();
  private healthObj = new HealthCheckController();
  private loginObj = new LoginController();
  private checkParamObj = new ParamController();
  private registerObj = new RegisterController();
  private authMiddlewareObj = new AuthMiddlewarwe();
  private checkNumParamObj = new CheckNumParamMiddleware();
  private customLogsObj = new CustomLogsMiddleware();
  private dynamicValidationObj = new DynamicValidationMiddleware();
  private geoLocObj = new GeoLocationMiddleware();
  private limitinReqObj = new LimitingReqMiddleware();
  private paramValidationObj = new ParamValidationMiddleware();
  private validationObj: ValidationMiddleware = new ValidationMiddleware();

  private initializeRoutes = (): void => {
    this.router.get("/health", this.healthObj.healthChecker);
    this.router.get(
      "/get",
      this.geoLocObj.geoLocMiddleware,
      this.limitinReqObj.limitingReqMiddleware,
      new CustomHeaderMiddleware({ Cooooontent: "txt" }).customHeaderMiddleware,
      this.customLogsObj.customLogsMiddleware,
      this.authMiddlewareObj.authMiddleware,
      this.checkNumParamObj.checkNumParamMiddleware,
      this.dataController.getData
    );

    this.router.post(
      "/post",
      this.limitinReqObj.limitingReqMiddleware,
      new CustomHeaderMiddleware({ Coontent: "html" }).customHeaderMiddleware,
      this.customLogsObj.customLogsMiddleware,
      this.authMiddlewareObj.authMiddleware,
      this.validationObj.validationMiddleware,
      this.dataController.postData
    );

    this.router.post("/login", this.loginObj.login);
    this.router.post(
      "/register",
      this.dynamicValidationObj.dynamicValidationMiddleware,
      this.registerObj.register
    );
    this.router.get("/async", this.async.asyncData);
    this.router.get(
      "/:id",
      this.paramValidationObj.paramValidationMiddleware,
      this.checkParamObj.paramController
    );
  };
  constructor() {
    this.initializeRoutes();
  }

  public getRouter = (): Router => {
    return this.router;
  };
}
export default DataRouter;
