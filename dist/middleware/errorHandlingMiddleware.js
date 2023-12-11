class ErrorHandlingMiddleware {
    constructor() {
        this.errorHandlingMiddleware = (err, req, res, next) => {
            res.status(err.status).json({ error: err.message });
        };
    }
}
export default new ErrorHandlingMiddleware().errorHandlingMiddleware;
