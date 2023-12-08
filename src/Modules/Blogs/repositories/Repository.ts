import mongoose from "mongoose";
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
}
export default Repo;
