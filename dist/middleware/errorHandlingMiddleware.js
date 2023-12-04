class ErrorHandlingMiddleware {
    constructor() {
        this.errorHandlingMiddleware = (err, req, res, next) => {
            console.log(err);
            res.send(err.message);
        };
    }
}
export default new ErrorHandlingMiddleware().errorHandlingMiddleware;
