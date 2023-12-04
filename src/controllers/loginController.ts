import { Request, Response } from "express";

class LoginController{
  public  login = (req: Request, res: Response):void => {
    res.json("User Authorised");
  };

}
export default new LoginController().login;
