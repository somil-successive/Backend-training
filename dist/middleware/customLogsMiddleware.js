class CustomLogsMiddleware {
    constructor() {
        this.customLogsMiddleware = (req, res, next) => {
            console.log(`Request Method: ${req.method} URL: ${req.url}  Timestamp: ${new Date()}`);
            next();
        };
    }
}
export default new CustomLogsMiddleware().customLogsMiddleware;
