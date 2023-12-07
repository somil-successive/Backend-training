import createError from "http-errors";
export const paramValidationMiddleware = (req, res, next) => {
    const { id } = req.params;
    if (!Number(id)) {
        next(createError(406, "Not Valid Params"));
    }
    next();
};
