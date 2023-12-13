import { Model } from "mongoose";
import { UpdateQuery } from "mongoose";

class BaseRepo<T> {
  private model: Model<T>;

  constructor(model: Model<T>) {
    this.model = model;
  }

  public getAll = async (): Promise<T[]> => {
    return await this.model.find().skip(1).limit(2);
  };

  public create = async (data: T): Promise<void> => {
    await this.model.insertMany(data);
  };

  public update = async (
    id: string,
    newData: UpdateQuery<T>
  ): Promise<void> => {
    await this.model.findByIdAndUpdate(id, newData);
  };
}
export default BaseRepo;
