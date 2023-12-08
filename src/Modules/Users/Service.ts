import { IUser } from "./entity/IUser.js";
import Repo from "./repositories/Repository.js";

class Service {
  private repo: Repo;

  constructor() {
    this.repo = new Repo();
  }

  public createUser = async (user: IUser) => {
    await this.repo.create(user);
  };

  public getAllUSers = async () => {
    return await this.repo.getAll();
  };

  public getByName = async (name:string) => {
    return await this.repo.getByName(name);
  };

  public getByEmail = async (email:string) => {
    return await this.repo.getByEmail(email);
  };


  public deleteByName=async(name:string)=>{
    return await this.repo.deleteByName(name);

  }
}

export default Service;
