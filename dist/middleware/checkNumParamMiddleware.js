export const checkNumParamMiddleware = (req, res, next) => {
    try {
        const query = req.query;
        if (!Number(query.id)) {
            res.send("id is not a number");
        }
        next();
    }
    catch (err) {
        next(err);
    }
};
