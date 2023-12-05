class ErrorHandlingMiddleware {
    constructor() {
        this.errorHandlingMiddleware = (err, req, res) => {
            console.log(err);
            res.send(err.message);
        };
    }
}
export default new ErrorHandlingMiddleware().errorHandlingMiddleware;
