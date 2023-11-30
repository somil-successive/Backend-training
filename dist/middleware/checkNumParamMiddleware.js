export const checkNumParamMiddleware = (req, res, next) => {
    const query = req.query;
    if (!Number(query.id)) {
        res.send("Query is not a number");
    }
    next();
};
