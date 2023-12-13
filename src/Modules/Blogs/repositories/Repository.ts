import { model } from "./Schema.js";
import { IBlogs } from "../entity/IBlogs.js";
import BaseRepo from "../../../libs/base/BaseRepo.js";

class Repo extends BaseRepo<IBlogs> {
  constructor() {
    super(model);
  }

  public getByTitle = async (title: string) => {
    return await model.findOne({ title });
  };

  public getById = async (id: string) => {
    return await model.findById(id);
  };

  public getByCategory = async (categories: string) => {
    return await model.findOne({ categories });
  };

  public updateByTitle = async (title: string, newPost: IBlogs) => {
    await model.findOneAndUpdate({ title }, newPost);
  };

  public deleteByTitle = async (title: string) => {
    return await model.findOneAndDelete({ title });
  };

  public search = async (value: string) => {
    return await model.find({
      $or: [
        { title: { $regex: value, $options: "i" } },
        { categories: { $regex: value, $options: "i" } },
        { "writer.name": { $regex: value, $options: "i" } },
        { "writer.id": { $regex: value, $options: "i" } },
      ],
    });
  };
}
export default Repo;
