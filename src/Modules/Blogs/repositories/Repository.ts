import { model } from "./Schema.js";
import { IBlogs } from "../entity/IBlogs.js";
import BaseRepo from "../../../libs/base/BaseRepo.js";
import { IQuery } from "../entity/IQuery.js";

class Repo extends BaseRepo<IBlogs> {
  constructor() {
    super(model);
  }

  public getByTitle = async (title: string): Promise<IBlogs | Error | null> => {
    try {
      return await model.findOne({ title });
    } catch (err) {
      if (err instanceof Error) {
        return err;
      } else {
        return null;
      }
    }
  };

  public getById = async (id: string): Promise<IBlogs | Error | null> => {
    try {
      return await model.findById(id);
    } catch (err) {
      if (err instanceof Error) {
        return err;
      } else {
        return null;
      }
    }
  };

  public getByCategory = async (
    categories: string
  ): Promise<IBlogs | Error | null> => {
    try {
      return await model.findOne({ categories });
    } catch (err) {
      if (err instanceof Error) {
        return err;
      } else {
        return null;
      }
    }
  };

  public updateByTitle = async (
    title: string,
    newPost: IBlogs
  ): Promise<Error | null> => {
    try {
      await model.findOneAndUpdate({ title }, newPost, { runValidators: true });
      return null;
    } catch (err) {
      if (err instanceof Error) {
        return err;
      } else {
        return null;
      }
    }
  };

  public deleteByTitle = async (
    title: string
  ): Promise<IBlogs | Error | null> => {
    try {
      await model.findOneAndDelete({ title });
      return null;
    } catch (err) {
      if (err instanceof Error) {
        return err;
      } else {
        return null;
      }
    }
  };

  public search = async (value: string) => {
    try {
      return await model.find({
        $or: [
          { title: { $regex: value, $options: "i" } },
          { categories: { $regex: value, $options: "i" } },
          { "writer.name": { $regex: value, $options: "i" } },
          { "writer.id": { $regex: value, $options: "i" } },
          { tags: { $regex: value, $options: "i" } },
        ],
      });
    } catch (err) {
      return "Invalid Search";
    }
  };

  public filter=async (conditionObj:any)=>{
    return await model.find(conditionObj)
  }

  public upload=async(data:IBlogs[])=>{
    try {
      await model.insertMany(data);
      return null;
    } catch (err) {
      if (err instanceof Error) {
        return err;
      } else {
        return null;
      }
    }
  }


}
export default Repo;
