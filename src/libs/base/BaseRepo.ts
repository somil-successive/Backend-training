import { Error, Model } from "mongoose";
import { UpdateQuery } from "mongoose";

class BaseRepo<T> {
  private model: Model<T>;

  constructor(model: Model<T>) {
    this.model = model;
  }

  public getAll = async (): Promise<T[] | Error | null> => {
    try {
      return await this.model.find().skip(1).limit(2);
    } catch (err) {
      if (err instanceof Error) {
        return err;
      } else {
        return null;
      }
    }
  };

  public create = async (data: T): Promise<Error | null> => {
    try {
      await this.model.insertMany(data);
      return null;
    } catch (err) {
      if (err instanceof Error) {
        return err;
      } else {
        return null;
      }
    }
  };

  public update = async (
    id: string,
    newData: UpdateQuery<T>
  ): Promise<null | Error> => {
    try {
      await this.model.findByIdAndUpdate(id, newData);
      return null;
    } catch (err) {
      if (err instanceof Error) {
        return err;
      } else {
        return null;
      }
    }
  };
}
export default BaseRepo;
