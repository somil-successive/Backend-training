import createError from "http-errors";
export const paramValidationMiddleware = (req, res, next) => {
  const { id } = req.query;
  if (isNaN(id)) {
    return next(createError(406, "Not Valid Params"));
  }
  next();
};
