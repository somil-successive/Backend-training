export const checkNumParamMiddleware = (req, res, next) => {
  try {
    const query = req.query;
    if (isNaN(query.q1)) {
      res.status(400);
      throw new Error("Query is not a number");
    }
    next();
  } catch (err) {
    next(err);
  }
};
