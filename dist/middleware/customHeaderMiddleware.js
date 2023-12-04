class CustomHeaderMiddleware {
    constructor() {
        this.customHeaderMiddleware = (customHeader) => {
            return (req, res, next) => {
                res.set(customHeader);
                next();
            };
        };
    }
}
export default new CustomHeaderMiddleware().customHeaderMiddleware;
