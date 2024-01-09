import { Error, Model, UpdateQuery } from "mongoose";

class BaseRepo<T> {
  private model: Model<T>;

  constructor(model: Model<T>) {
    this.model = model;
  }

  public getAll = async (
    skip: number,
    limit: number
  ): Promise<T[] | Error | null> => {
    return await this.model.find().skip(skip).limit(limit);
  };

  public create = async (data: T): Promise<T[] | null> => {
       await this.model.insertMany(data);
    return null;
  };

  public delete = async (id: string): Promise<Error | null> => {
    await this.model.findByIdAndDelete(id);
    return null;
  };

  public update = async (
    id: string,
    newData: UpdateQuery<T>
  ): Promise<null | Error> => {
    await this.model.findByIdAndUpdate(id, newData, { runValidators: true });
    return null;
  };
}
export default BaseRepo;
