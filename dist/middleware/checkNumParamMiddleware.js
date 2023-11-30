export const checkNumParamMiddleware = (req, res, next) => {
    const query = req.query;
    if (isNaN(query.id)) {
        res.send("Query is not a number");
    }
    next();
};
