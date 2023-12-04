export const errorHandlingMiddleware = (err, req, res, next) => {
  if (!res.status) {
    res.status(400);
  }
  res.json({ error: err.message });
};
