import { Model } from "mongoose";

class BaseRepo<T> {
  private model: Model<T>;

  constructor(model: Model<T>) {
    this.model = model;
  }

  public getAll = async () => {
    return await this.model.find();
  };

  public create = async (data: T) => {
    await this.model.insertMany(data);
  };

  
}
export default BaseRepo;
