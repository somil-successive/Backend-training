import { Request, Response, NextFunction } from "express";
import { ICustomHeader } from "../interface/ICustomHeader";

export const customHeaderMiddleware = (customHeader: ICustomHeader) => {
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
