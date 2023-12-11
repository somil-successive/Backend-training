"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const dataController_1 = __importDefault(require("../controllers/dataController"));
const customHeaderMiddleware_1 = __importDefault(require("../middleware/customHeaderMiddleware"));
const asyncController_1 = __importDefault(require("../controllers/asyncController"));
const healthCheckController_1 = __importDefault(require("../controllers/healthCheckController"));
const loginController_1 = __importDefault(require("../controllers/loginController"));
const paramController_1 = __importDefault(require("../controllers/paramController"));
const registerController_1 = __importDefault(require("../controllers/registerController"));
const authMiddleware_1 = __importDefault(require("../middleware/authMiddleware"));
const checkNumParamMiddleware_1 = __importDefault(require("../middleware/checkNumParamMiddleware"));
const customLogsMiddleware_1 = __importDefault(require("../middleware/customLogsMiddleware"));
const dynamicValidationMiddleware_1 = __importDefault(require("../middleware/dynamicValidationMiddleware"));
const geoLocMiddleware_1 = __importDefault(require("../middleware/geoLocMiddleware"));
const limitingReqMiddleware_1 = __importDefault(require("../middleware/limitingReqMiddleware"));
const paramValidationMiddleware_1 = __importDefault(require("../middleware/paramValidationMiddleware"));
const validationMiddleware_1 = __importDefault(require("../middleware/validationMiddleware"));
class DataRouter {
    constructor() {
        this.router = (0, express_1.Router)();
        this.async = new asyncController_1.default();
        this.dataController = new dataController_1.default();
        this.healthObj = new healthCheckController_1.default();
        this.loginObj = new loginController_1.default();
        this.checkParamObj = new paramController_1.default();
        this.registerObj = new registerController_1.default();
        this.authMiddlewareObj = new authMiddleware_1.default();
        this.checkNumParamObj = new checkNumParamMiddleware_1.default();
        this.customLogsObj = new customLogsMiddleware_1.default();
        this.dynamicValidationObj = new dynamicValidationMiddleware_1.default();
        this.geoLocObj = new geoLocMiddleware_1.default();
        this.limitinReqObj = new limitingReqMiddleware_1.default();
        this.paramValidationObj = new paramValidationMiddleware_1.default();
        this.validationObj = new validationMiddleware_1.default();
        this.initializeRoutes = () => {
            this.router.get("/health", this.healthObj.healthChecker);
            this.router.get("/get", this.geoLocObj.geoLocMiddleware, this.limitinReqObj.limitingReqMiddleware, new customHeaderMiddleware_1.default({ Cooooontent: "txt" }).customHeaderMiddleware, this.customLogsObj.customLogsMiddleware, this.authMiddlewareObj.authMiddleware, this.checkNumParamObj.checkNumParamMiddleware, this.dataController.getData);
            this.router.post("/post", this.limitinReqObj.limitingReqMiddleware, new customHeaderMiddleware_1.default({ Coontent: "html" }).customHeaderMiddleware, this.customLogsObj.customLogsMiddleware, this.authMiddlewareObj.authMiddleware, this.validationObj.validationMiddleware, this.dataController.postData);
            this.router.post("/login", this.loginObj.login);
            this.router.post("/register", this.dynamicValidationObj.dynamicValidationMiddleware, this.registerObj.register);
            this.router.get("/async", this.async.asyncData);
            this.router.get("/:id", this.paramValidationObj.paramValidationMiddleware, this.checkParamObj.paramController);
        };
        this.getRouter = () => {
            return this.router;
        };
        this.initializeRoutes();
    }
}
exports.default = DataRouter;
