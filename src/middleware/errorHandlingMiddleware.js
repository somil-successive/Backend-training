export const errorHandlingMiddleware = (err, req, res, next) => {
  res.json({error:err.message});
};
