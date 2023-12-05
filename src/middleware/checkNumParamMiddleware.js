export const checkNumParamMiddleware = (req, res, next) => {
  try {
    const query = req.query;
    if (isNaN(query.id)) {
      res.status(400);
      throw new Error("id is not a number");
    }
    next();
  } catch (err) {
    next(err);
  }
};
