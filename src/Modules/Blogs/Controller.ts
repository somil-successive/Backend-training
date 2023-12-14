import { Request, Response } from "express";
import Service from "./Service.js";
import { IQuery } from "./entity/IQuery.js";
import SystemResponse from "../../libs/config/SystemResponse.js";

class Controller {
  private service = new Service();
  public getAll = async (req: Request, res: Response): Promise<void> => {
    const data = await this.service.getAll();
    if (data) {
      // res.json(data);
      res.send(
        new SystemResponse(200, "Data fetched Successfully", data).success()
      );
    } else {
      res.status(502).json({ error: "No Data Found " });
    }
  };
  public create = async (req: Request, res: Response): Promise<void> => {
    const data = req.body;
    const msg = await this.service.create(data);
    if (!msg) {
      // res.json({ message: "Blog Created Successfully" });
      res.send(
        new SystemResponse(200, "Blog Created Successfully", {}).success()
      );
    } else {
      res.status(406).json({ error: msg });
    }
  };
  public getByTitle = async (req: Request, res: Response) => {
    const { title } = req.body;
    const data = await this.service.getByTitle(title);
    if (data) {
      // res.json(data);
      res.send(
        new SystemResponse(200, "Blogs fetched Successfully", data).success()
      );
    } else {
      res.status(502).json({ error: "No Data Found " });
    }
  };
  public getById = async (req: Request, res: Response) => {
    const { id } = req.params;
    const data = await this.service.getById(id);
    if (data) {
      // res.json(data);
      res.send(
        new SystemResponse(200, "Blogs fetched Successfully", data).success()
      );
    } else {
      res.status(502).json({ error: "No Data Found " });
    }
  };
  public getByCategory = async (req: Request, res: Response) => {
    const { categories } = req.params;
    const data = await this.service.getByCategory(categories);
    if (data) {
      res.json(data);
    } else {
      res.status(502).json({ error: "No Data Found " });
    }
  };
  public deleteByTitle = async (req: Request, res: Response) => {
    const { title } = req.params;
    const msg = await this.service.deleteByTitle(title);
    if (!msg) {
      // res.json({ message: "Blog has been deleted" });
      res.send(
        new SystemResponse(200, "Blog Deleted Successfully", {}).success()
      );
    } else {
      res.status(406).json({ error: msg });
    }
  };
  public updateByTitle = async (req: Request, res: Response) => {
    const { title } = req.params;
    const newPost = req.body;
    const msg = await this.service.updateByTitle(title, newPost);
    if (msg === null) {
      // res.json({ message: "Updated successfully" });
      res.send(new SystemResponse(200, "Updated Successfully", {}).success());
    } else {
      res.status(406).json({ error: msg });
    }
  };
  public search = async (req: Request, res: Response) => {
    const { value } = req.params;
    const data = await this.service.search(value);
    if (data.length !== 0) {
      // res.json(data);
      res.send(
        new SystemResponse(200, "Blogs fetched Successfully", data).success()
      );
    } else {
      res.status(406).json({ error: "Invalid Search Query" });
    }
  };

  public filter = async (req: Request, res: Response) => {
    let conditionObj: any = { ...req.query };
    let conditionStr = JSON.stringify(conditionObj);
    conditionStr = conditionStr.replace(
      /\b(gte|gt|lte|lt)\b/g,
      (match) => `$${match}`
    );
    conditionObj = JSON.parse(conditionStr);
    const data = await this.service.filter(conditionObj);
    // res.json(data);
    res.send(
      new SystemResponse(200, "Blogs fetched Successfully", data).success()
    );
  };
}
export default Controller;
