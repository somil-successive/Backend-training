import express from "express";
import errorHandlingMiddleware from "./middleware/errorHandlingMiddleware.js";
import DataRouter from "./routes/dataRoutes.js";
import Connection from "./libs/databaseConnection.js";
class App {
    constructor() {
        this.app = express();
        this.setRoutes = () => {
            const dataRouter = new DataRouter();
            this.app.use('/data', dataRouter.getRouter());
        };
        this.setErrorHandler = () => {
            this.app.use(errorHandlingMiddleware);
        };
        this.startServer = (PORT) => {
            this.app.listen(PORT, () => {
                console.log(`server is running on PORT ${PORT}`);
            });
        };
        new Connection().connectDB(),
            this.setRoutes();
        this.app.use(express.json());
        this.setErrorHandler();
    }
}
export default new App();
