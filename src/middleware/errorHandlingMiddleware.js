export const errorHandlingMiddleware = (err, req, res, next) => {
  console.log(err)
  res.send(err.message);
};
