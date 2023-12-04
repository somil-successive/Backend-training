import createError from "http-errors";
class CustomHeaderMiddleware {
    constructor(customHeader) {
        this.customHeaderMiddleware = (req, res, next) => {
            if (Object.keys(this.customHeader).length === 0) {
                return next(createError(411, "No Headers Added"));
            }
            res.set(this.customHeader);
            next();
        };
        this.customHeader = customHeader;
    }
}
export default CustomHeaderMiddleware;
