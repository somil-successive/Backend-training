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
  public getByName = async (title: string) => {
    return await this.repos.getByTitle(title);
  };
  public deleteByTitle = async (title: string) => {
    return await this.repos.deleteByTitle(title);
  };
  public updateByTitle=async (title:string,newPost:IBlogs)=>{
    await this.repos.updateByTitle(title,newPost);
  }

  
}
export default Service;
