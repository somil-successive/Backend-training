import { IBlogs } from "./entity/IBlogs";
import Repo from "./repositories/Repository";

class Service {
  private repos;
  constructor() {
    this.repos = new Repo();
  }
  public getAll = async (skip: number, limit: number) => {
    return await this.repos.getAll(skip, limit);
  };
  public create = async (data: IBlogs) => {
    return await this.repos.create(data);
  };
  public getById = async (id: string) => {
    return await this.repos.getById(id);
  };

  public getByCategory = async (
    skip: number,
    limit: number,
    categories: string
  ) => {
    return await this.repos.getByCategory(categories, skip, limit);
  };
  public updateByTitle = async (title: string, newPost: IBlogs) => {
    return await this.repos.updateByTitle(title, newPost);
  };

  public search = async (skip: number, limit: number, value: string) => {
    return await this.repos.search(skip, limit, value);
  };

  

  // public filter = async (conditionObj: any) => {
  //   return await this.repos.filter(conditionObj);
  // };

  public delete = async (id: string) => {
    return await this.repos.delete(id);
  };
  public update = async (id: string, newPost: IBlogs) => {
    return await this.repos.update(id, newPost);
  };

  public getAllBulkUploads = async () => {
    return await this.repos.getAllBulkUploads();
  };

  public getAllErrorDetails = async (skip: number, limit: number,sessionId:string) => {
    return await this.repos.getAllErrorDetails(skip, limit,sessionId);
  };
}
export default Service;
