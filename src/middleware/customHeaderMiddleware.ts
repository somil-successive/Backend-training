import {Request,Response,NextFunction} from 'express';

export const customHeaderMiddleware = (customHeader) => {
  return (req:Request, res:Response, next:NextFunction)=> {
    res.set(customHeader);
    next();
  };
};
