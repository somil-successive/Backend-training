import {Request,Response,NextFunction} from 'express';

export const customLogsMiddleware = (req:Request, res:Response, next:NextFunction)=> {
  console.log(
    `Request Method: ${req.method} URL: ${req.url}  Timestamp: ${new Date()}`
  );
  next();
};
