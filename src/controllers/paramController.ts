import { Request, Response } from "express";

class ParamController{
  public  paramController = (req:Request, res:Response) => {
    res.json({ msg: "param validated successfully" });
  };

}
export default new ParamController().paramController;
