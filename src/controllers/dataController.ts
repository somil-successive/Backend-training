import { Request, Response } from "express";
import data from "../utils/mockData.js";

const getData = (req: Request, res: Response) => {
  res.json(data);
};

const postData = (req: Request, res: Response) => {
  const newD = req.body;
  data.push(newD);
  res.send(data);
};
export { getData, postData };
