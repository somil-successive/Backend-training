import {Request,Response,NextFunction} from 'express';

export const errorHandlingMiddleware = (err:Error, req:Request, res:Response, next:NextFunction) => {
  res.send(err.message);
};
