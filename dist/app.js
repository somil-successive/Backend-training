var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import express from "express";
import errorHandlingMiddleware from "./middleware/errorHandlingMiddleware.js";
import DataRouter from "./routes/dataRoutes.js";
import Connection from "./libs/databaseConnection.js";
import userRoutes from './routes/userRoutes.js';
import countryRouter from "./routes/countryRoutes.js";
class App {
    constructor() {
        this.app = express();
        this.setRoutes = () => {
            const dataRouter = new DataRouter();
            this.app.use('/data', dataRouter.getRouter());
            this.app.use('/user', userRoutes);
            this.app.use('/country', countryRouter);
        };
        this.setErrorHandler = () => {
            this.app.use(errorHandlingMiddleware);
        };
        this.startServer = (PORT) => __awaiter(this, void 0, void 0, function* () {
            yield this.connection.connectDB();
            this.app.listen(PORT, () => {
                console.log(`server is running on PORT ${PORT}`);
            });
        });
        this.connection = new Connection();
        this.app.use(express.json());
        this.setRoutes();
        this.setErrorHandler();
    }
}
export default new App();
