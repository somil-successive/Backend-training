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

  public updateByTitle = async (title: string, newPost: IBlogs) => {
    await model.findOneAndUpdate({ title }, newPost);
  };

  public deleteByTitle = async (title: string) => {
    return await model.findOneAndDelete({ title });
  };
}
export default Repo;
