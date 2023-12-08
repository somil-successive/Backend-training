"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const authMiddleware_1 = __importDefault(require("../middleware/authMiddleware"));
const dataController_1 = __importDefault(require("../controllers/dataController"));
const customLogsMiddleware_1 = __importDefault(require("../middleware/customLogsMiddleware"));
const limitingReqMiddleware_1 = __importDefault(require("../middleware/limitingReqMiddleware"));
const checkNumParamMiddleware_1 = __importDefault(require("../middleware/checkNumParamMiddleware"));
const geoLocMiddleware_1 = __importDefault(require("../middleware/geoLocMiddleware"));
const dynamicValidationMiddleware_1 = __importDefault(require("../middleware/dynamicValidationMiddleware"));
const loginController_1 = __importDefault(require("../controllers/loginController"));
const registerController_1 = __importDefault(require("../controllers/registerController"));
const paramValidationMiddleware_1 = __importDefault(require("../middleware/paramValidationMiddleware"));
const asyncController_1 = __importDefault(require("../controllers/asyncController"));
const validationMiddleware_1 = __importDefault(require("../middleware/validationMiddleware"));
const healthCheckController_1 = __importDefault(require("../controllers/healthCheckController"));
const customHeaderMiddleware_1 = __importDefault(require("../middleware/customHeaderMiddleware"));
const paramController_1 = __importDefault(require("../controllers/paramController"));
class DataRouter {
    constructor() {
        this.router = (0, express_1.Router)();
        this.initializeRoutes = () => {
            this.router.get("/get", paramValidationMiddleware_1.default, geoLocMiddleware_1.default, limitingReqMiddleware_1.default, new customHeaderMiddleware_1.default({ Cooooontent: "txt" }).customHeaderMiddleware, customLogsMiddleware_1.default, authMiddleware_1.default, checkNumParamMiddleware_1.default, new dataController_1.default().getData);
            this.router.post("/post", limitingReqMiddleware_1.default, new customHeaderMiddleware_1.default({ Coontent: "html" }).customHeaderMiddleware, customLogsMiddleware_1.default, authMiddleware_1.default, validationMiddleware_1.default, new dataController_1.default().postData);
            this.router.post("/login", loginController_1.default);
            this.router.post("/register", dynamicValidationMiddleware_1.default, registerController_1.default);
            this.router.get("/async", asyncController_1.default);
            this.router.get("/:id", paramValidationMiddleware_1.default, paramController_1.default);
            this.router.get("/health", healthCheckController_1.default);
        };
        this.getRouter = () => {
            return this.router;
        };
        this.initializeRoutes();
    }
}
exports.default = DataRouter;
