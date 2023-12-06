export const errorHandlingMiddleware = (err, req, res, next) => {
    res.send(err.message);
};
