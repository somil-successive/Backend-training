import { Request, Response } from "express";
import UserService from "../services/userService.js";

class UserController {
  private userService = new UserService();

  public getAllUsers = async(req: Request, res: Response) => {
     const data = await this.userService.getAllUSers();
    res.json(data);
  };

  public createUser = async (req: Request, res: Response) => {
    const user = req.body;
    await this.userService.createUser(user);
    res.send("user has been created");
  };
}
export default UserController;
