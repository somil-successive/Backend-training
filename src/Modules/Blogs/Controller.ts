import { Request, Response } from "express";
import Service from "./Service.js";

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
    const data = await this.service.getByTitle(title);
    res.json(data);
  };
  public getById = async (req: Request, res: Response) => {
    const { id } = req.params;
    const data = await this.service.getById(id);
    res.json(data);
  };
  public getByCategory = async (req: Request, res: Response) => {
    const { categories } = req.params;
    const data = await this.service.getByCategory(categories);
    res.json(data);
  };
  public deleteByTitle = async (req: Request, res: Response) => {
    const { title } = req.params;
    await this.service.deleteByTitle(title);
    res.json({ message: "Blog has been deleted" });
  };
  public updateByTitle = async (req: Request, res: Response) => {
    const { title } = req.params;
    const newPost = req.body;
    await this.service.updateByTitle(title, newPost);
    res.json({ message: "Updated successfully" });
  };
  public search = async (req: Request, res: Response) => {
    const { value } = req.params;
    const data = await this.service.search(value);
    res.json(data);
  };
}
export default Controller;
