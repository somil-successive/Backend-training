import { Request, Response } from "express";

export const paramController = (req:Request, res:Response) => {
    res.json({ msg: "param validated successfully" });
  };