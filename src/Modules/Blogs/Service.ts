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
    return await this.repos.create(data);
  };
  public getByTitle = async (title: string) => {
    return await this.repos.getByTitle(title);
  };
  public getById = async (id: string) => {
    return await this.repos.getById(id);
  };

  public getByCategory = async (categories: string) => {
    return await this.repos.getByCategory(categories);
  };
  public deleteByTitle = async (title: string) => {
    return await this.repos.deleteByTitle(title);
  };
  public updateByTitle = async (title: string, newPost: IBlogs) => {
    return await this.repos.updateByTitle(title, newPost);
  };

  public search = async (value: string) => {
    return await this.repos.search(value);
  };

  public filter = async (conditionObj:any) => {
    return await this.repos.filter(conditionObj);
  };


}
export default Service;
