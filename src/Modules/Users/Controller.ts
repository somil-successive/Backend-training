import { Request, Response } from "express";
import Service from "./Service.js";
import { IUser } from "./entity/IUser.js";

class Controller {
  private userService = new Service();

  public getAllUsers = async (req: Request, res: Response) => {
    const data = await this.userService.getAllUSers();
    res.json(data);
  };

  public createUser = async (req: Request, res: Response) => {
    const user: IUser = req.body;
    await this.userService.createUser(user);
    res.json({ message: "Registered Successfully" });
  };

  public getByName = async (req: Request, res: Response) => {
    const { name } = req.params;
    const data = await this.userService.getByName(name);
    res.json(data);
  };

  public getByEmail = async (req: Request, res: Response) => {
    const { email } = req.params;
    const data = await this.userService.getByEmail(email);
    res.json(data);
  };

  public deleteByName = async (req: Request, res: Response) => {
    const { name } = req.params;
    await this.userService.deleteByName(name);
    res.json({ message: "user has been deleted successfully" });
  };

  public login = async (req: Request, res: Response) => {
    const data = req.body;
    const registeredData = await this.userService.getByEmail(data.email);
    if (data.password === registeredData?.password) {
      res.json({ message: "Login successful" });
    } else {
      res.status(401).json({ error: "Wrong credentials" });
    }
  };

  public update = async (req: Request, res: Response) => {
    const { id } = req.params;
    const newData = req.body;
    await this.userService.update(id, newData);
    res.json({ message: "Data has been updated successfully!" });
  };

  
}
export default Controller;
