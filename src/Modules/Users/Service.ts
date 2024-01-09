import { IUser } from "./entity/IUser";
import Repo from "./repositories/Repository";
import bcrypt from "bcrypt";

class Service {
  private repo: Repo;

  constructor() {
    this.repo = new Repo();
  }

  public createUser = async (user: IUser) => {
    user.password = await bcrypt.hash("password", 12);
    await this.repo.create(user);
  };

   public getAllUSers = async (skip:number,limit:number) => {
 return await this.repo.getAll(skip,limit);
  };

  public getByName = async (name: string) => {
    return await this.repo.getByName(name);
  };

  public getByEmail = async (email: string) => {
    return await this.repo.getByEmail(email);
  };

  public deleteByName = async (name: string) => {
    return await this.repo.deleteByName(name);
  };

  public update=async (id:string,newData:IUser)=>{
    await this.repo.update(id,newData);

  }
}

export default Service;
