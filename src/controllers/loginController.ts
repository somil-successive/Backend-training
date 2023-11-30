import {Request,Response} from 'express';

export const login = (req:Request, res:Response) => {
  console.log(req.user);
  res.json("User Authorised");
};
