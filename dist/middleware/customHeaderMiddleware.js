"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class CustomHeaderMiddleware {
    constructor(customHeader) {
        this.customHeaderMiddleware = (req, res, next) => {
            try {
                if (Object.keys(this.customHeader).length === 0) {
                    throw new Error("No custom header added");
                }
                res.set(this.customHeader);
                next();
            }
            catch (error) {
                next(error);
            }
        };
        this.customHeader = customHeader;
    }
}
exports.default = CustomHeaderMiddleware;
