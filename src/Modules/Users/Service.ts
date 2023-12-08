import { IUser } from "./entity/IUser.js";
import Repo from "./repositories/Repository.js";

class Service {
  private repo: Repo;

  constructor() {
    this.repo = new Repo();
  }

  public createUser = async (user: IUser) => {
    await this.repo.createUser(user);
  };

  public getAllUSers = async () => {
    return await this.repo.getAllUsers();
  };
}

export default Service;
