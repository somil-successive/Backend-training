export const errorHandlingMiddleware = (err, req, res, next) => {
    const statusCode = 400;
    if (!res.status) {
        res.status(statusCode);
    }
    res.status(err.status).json({ error: err.message });
};
