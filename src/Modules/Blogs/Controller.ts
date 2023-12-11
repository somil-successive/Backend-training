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
  public getByTitle = async (req: Request, res: Response) => {
    const { title } = req.body;
    const data = await this.service.getByName(title);
  };
  public deleteByTitle = async (req: Request, res: Response) => {
    const { title } = req.params;
    await this.service.deleteByTitle(title);
    res.json({ message: "Blog has been deleted" });
  };
}
export default Controller;
