class CheckNumParamMiddleware {
    constructor() {
        this.checkNumParamMiddleware = (req, res, next) => {
            const query = req.query;
            if (!Number(query.id)) {
                res.send("Query is not a number");
            }
            next();
        };
    }
}
export default new CheckNumParamMiddleware().checkNumParamMiddleware;
