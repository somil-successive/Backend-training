import { Request, Response } from "express";
import data from "../utils/mockData";

class DataController {
  public getData = (req: Request, res: Response): void => {
    res.json(data);
  };

  public postData = (req: Request, res: Response): void => {
    const newD = req.body;
    data.push(newD);
    res.send(data);
  };
}

export default DataController;
