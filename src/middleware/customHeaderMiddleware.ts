import { Request, Response, NextFunction } from "express";

export const customHeaderMiddleware = (customHeader: {}) => {

  return (req: Request, res: Response, next: NextFunction) => {
    try {
      if (Object.keys(customHeader).length === 0) {
        throw new Error("No custom header added");
      }
      res.set(customHeader);
      next();
    } catch (error) {
      next(error);
    }
  };
};
