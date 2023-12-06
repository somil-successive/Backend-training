import createError from "http-errors";
export const paramValidationMiddleware = (req, res, next) => {
  const { id } = req.params;
  if (isNaN(id)) {
    return next(createError(406, "Not Valid Params"));
  }
  next();
};
