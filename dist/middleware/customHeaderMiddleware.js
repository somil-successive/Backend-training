class CustomHeaderMiddleware {
    constructor(customHeader) {
        this.customHeaderMiddleware = (req, res, next) => {
            res.set(this.customHeader);
            next();
        };
        this.customHeader = customHeader;
    }
}
;
export default new CustomHeaderMiddleware({ "Coontent": "txt" }).customHeaderMiddleware;
