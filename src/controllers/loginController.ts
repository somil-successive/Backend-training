import { Request, Response } from "express";

class LoginController {
  public login = (req: Request, res: Response): void => {
    res.json({ message: "Login succesfull" });
  };
}
export default new LoginController().login;
