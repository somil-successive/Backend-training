import { IBlogs } from "./entity/IBlogs.js";
import Repo from "./repositories/Repository.js";

class Service {
  private repos;
  constructor() {
    this.repos = new Repo();
  }
  public getAll = async () => {
    return await this.repos.getAll();
  };
  public create = async (data: IBlogs) => {
    await this.repos.create(data);
  };
}
export default Service;
