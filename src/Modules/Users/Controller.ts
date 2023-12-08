import { Request, Response } from "express";
import Service from "./Service.js";

class Controller {
  private userService = new Service();

  public getAllUsers = async (req: Request, res: Response) => {
    const data = await this.userService.getAllUSers();
    res.json(data);
  };

  public createUser = async (req: Request, res: Response) => {
    const user = req.body;
    await this.userService.createUser(user);
    res.json({ message: "Registered Successfully" });
  };
}
export default Controller;
