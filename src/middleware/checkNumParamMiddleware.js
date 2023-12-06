import createError from "http-errors";
export const checkNumParamMiddleware = (req, res, next) => {
  try {
    const query = req.query;
    if (isNaN(query.id)) {
      next(createError(406, "id is not a number"));
    }
    next();
  } catch (err) {
    next(err);
  }
};
