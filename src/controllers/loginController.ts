import { Request, Response } from "express";

export const login = (req: Request, res: Response) => {
  res.json("User Authorised");
};
