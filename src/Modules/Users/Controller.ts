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
    const user:IUser = req.body;
    await this.userService.createUser(user);
    res.json({ message: "Registered Successfully" });
  };

  public getByName = async (req: Request, res: Response) => {
    const { name } = req.params;
    console.log("name",name);
    
    const data = await this.userService.getByName(name);
    console.log(data);
    res.json(data);
  };

  public getByEmail = async (req: Request, res: Response) => {
    const { email } = req.params;
    console.log("email", email);
    
    const data = await this.userService.getByEmail(email);
    console.log(data);
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
      res.status(401).json({ error: "please sign up" });
    }
  };
}
export default Controller;
