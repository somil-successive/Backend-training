import { data } from "../../src/utils/mockData.js";
import {Request,Response} from 'express';

const getData = (req:Request, res:Response) => {
  console.log(req.user);
  res.json(data);
};

const postData = (req:Request, res:Response) => {
  const newD = req.body;
  data.push(newD);
  res.send(data);
};
export { getData, postData };
