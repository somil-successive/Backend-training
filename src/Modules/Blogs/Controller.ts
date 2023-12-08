import { Request, Response } from "express";
import Service from "./Service.js";

class Controller {
  private service = new Service();
  public getAll = async (req: Request, res: Response) => {
    const data = await this.service.getAll();
    res.json(data);
  };
  public create = async (req: Request, res: Response) => {
    const data = req.body;
    this.service.create(data);
    res.json({ message: "Blogs has been successfully created" });
  };
}
export default Controller;
