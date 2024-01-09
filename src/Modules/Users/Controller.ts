import { Request, Response } from "express";
import Service from "./Service";
import { IUser } from "./entity/IUser";
import bcrypt from 'bcrypt'

class Controller {
  private userService = new Service();

  public getAllUsers = async (req: Request, res: Response) => {
    try{
    const { page, limit } = req.query;
    const pageNumber: number = page ? parseInt(String(page), 10) || 1 : 1;
    const limitNumber: number = limit ? parseInt(String(limit), 10) : 10;
    const skip: number = (pageNumber - 1) * limitNumber;

    const data = await this.userService.getAllUSers(skip, limitNumber);
    res.json(data);
    }catch(err){
      res.status(406).json({error:"Invalid query"});
    }
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
    try {
    const data = req.body;
    const registeredData = await this.userService.getByEmail(data.email);
    if(registeredData){
       await bcrypt.compare(data.password,registeredData?.password);
       return res.status(200).json({message:"Login successful"});

        // const token: string = jwt.sign(data, configurations.secretKey,{expiresIn:'1h'});
        // console.log(token);
        // res.json({ message: "Login successful", 'authToken':token});
      } else {
        throw new Error("Wrong Credentials")
      }
    } catch (err) {
      res.status(401).json({ error: "Wrong Credentials" });
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
