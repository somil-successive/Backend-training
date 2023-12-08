"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dataRoutes_1 = __importDefault(require("./routes/dataRoutes"));
const errorHandlingMiddleware_1 = __importDefault(require("./middleware/errorHandlingMiddleware"));
class App {
    constructor() {
        this.app = (0, express_1.default)();
        this.errorHandlingObj = new errorHandlingMiddleware_1.default();
        this.setRoutes = () => {
            const dataRouter = new dataRoutes_1.default();
            this.app.use("/data", dataRouter.getRouter());
        };
        this.setErrorHandler = () => {
            this.app.use(this.errorHandlingObj.errorHandlingMiddleware);
        };
        this.startServer = (PORT) => {
            this.app.listen(PORT, () => {
                console.log(`server is running on PORT ${PORT}`);
            });
        };
        this.app.use(express_1.default.json());
        this.setRoutes();
        this.setErrorHandler();
    }
}
exports.default = App;
