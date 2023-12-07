class ErrorHandlingMiddleware {
    constructor() {
        this.errorHandlingMiddleware = (err, req, res) => {
            res.status(err.status).json(err.message);
        };
    }
}
export default new ErrorHandlingMiddleware().errorHandlingMiddleware;
