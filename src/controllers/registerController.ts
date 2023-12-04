import { Request, Response } from "express";

class RegisterController{
  public  register = (req: Request, res: Response):void => {
    res.json("Registered Successfully");
  };

}
export default new RegisterController().register;

