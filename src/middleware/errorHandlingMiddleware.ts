import {Request,Response,NextFunction} from 'express';

export const errorHandlingMiddleware = (err:Error, req:Request, res:Response, next:NextFunction) => {
  console.log(err);
  res.send(err.message);
};
