"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.customHeaderMiddleware = void 0;
const customHeaderMiddleware = (customHeader) => {
    return (req, res, next) => {
        try {
            if (Object.keys(customHeader).length === 0) {
                throw new Error("No custom header added");
            }
            res.set(customHeader);
            next();
        }
        catch (error) {
            next(error);
        }
    };
};
exports.customHeaderMiddleware = customHeaderMiddleware;
