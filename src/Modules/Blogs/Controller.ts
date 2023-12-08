import { Request, Response } from "express";
import Service from "./Service.js";
import { model } from "mongoose";

class Controller {
  private service = new Service();
  public getAll = async (req: Request, res: Response): Promise<void> => {
    const data = await this.service.getAll();
    res.json(data);
  };
  public create = async (req: Request, res: Response): Promise<void> => {
    const data = req.body;
    this.service.create(data);
    res.json({ message: "Blogs has been successfully created" });
  };
  public getByName = async (req: Request, res: Response) => {
    const { title } = req.body;
    const data = await this.service.getByName(title);
  };
}
export default Controller;
