"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const errorHandlingMiddleware_1 = __importDefault(require("./middleware/errorHandlingMiddleware"));
const dataRoutes_1 = __importDefault(require("./routes/dataRoutes"));
class App {
    constructor() {
        this.app = (0, express_1.default)();
        this.setRoutes = () => {
            const dataRouter = new dataRoutes_1.default();
            this.app.use('/data', dataRouter.getRouter());
        };
        this.setErrorHandler = () => {
            this.app.use(errorHandlingMiddleware_1.default);
        };
        this.startServer = (PORT) => {
            this.app.listen(PORT, () => {
                console.log(`server is running on PORT ${PORT}`);
            });
        };
        this.setRoutes();
        this.app.use(express_1.default.json());
        this.setErrorHandler();
    }
}
exports.default = new App();
