import { Router } from "express";
import authMiddleware from "../middleware/authMiddleware.js";
import DataController from "../controllers/dataController.js";
import customLogsMiddleware from "../middleware/customLogsMiddleware.js";
import limitingReqMiddleware from "../middleware/limitingReqMiddleware.js";
import checkNumParamMiddleware from "../middleware/checkNumParamMiddleware.js";
import geoLocMiddleware from "../middleware/geoLocMiddleware.js";
import dynamicValidationMiddleware from "../middleware/dynamicValidationMiddleware.js";
import loginController from "../controllers/loginController.js";
import registerController from "../controllers/registerController.js";
import paramValidationMiddleware from "../middleware/paramValidationMiddleware.js";
import asyncController from "../controllers/asyncController.js";
import validationMiddleware from "../middleware/validationMiddleware.js";
import healthCheckController from "../controllers/healthCheckController.js";
import CustomHeaderMiddleware from "../middleware/customHeaderMiddleware.js";
class DataRouter {
    constructor() {
        this.router = Router();
        this.initializeRoutes = () => {
            this.router.get("/get", paramValidationMiddleware, geoLocMiddleware, limitingReqMiddleware, new CustomHeaderMiddleware({ Cooooontent: "txt" }).customHeaderMiddleware, customLogsMiddleware, authMiddleware, checkNumParamMiddleware, new DataController().getData);
            this.router.post("/post", limitingReqMiddleware, new CustomHeaderMiddleware({ Coontent: "html" }).customHeaderMiddleware, customLogsMiddleware, validationMiddleware, new DataController().postData);
            this.router.post("/login", loginController);
            this.router.post("/register", dynamicValidationMiddleware, registerController);
            this.router.get("/async", asyncController);
            this.router.get("/health", healthCheckController);
        };
        this.getRouter = () => {
            return this.router;
        };
        this.initializeRoutes();
    }
}
export default DataRouter;
