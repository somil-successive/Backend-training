import createError from "http-errors";
class ParamValidationMiddleware {
    constructor() {
        this.paramValidationMiddleware = (req, res, next) => {
            const { id } = req.query;
            if (!Number(id)) {
                return next(createError(406, "Not Valid Params"));
            }
            next();
        };
    }
}
export default new ParamValidationMiddleware().paramValidationMiddleware;
