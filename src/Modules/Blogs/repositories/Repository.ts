import { model } from "./Schema";
import { IBlogs } from "../entity/IBlogs";
import BaseRepo from "../../../libs/base/BaseRepo";
import BulkUpload from "./BulkUploadModel";
import IBulkUpload from "../entity/IBulkUpload";
import BulkErrorDetail from "./BulkErrorModel";
import IBulkError from "../entity/IBulkErrors";


class Repo extends BaseRepo<IBlogs> {
  constructor() {
    super(model);
  }

  public getById = async (id: string): Promise<IBlogs | Error | null> => {
    return await model.findById(id);
  };

  public getByCategory = async (
    categories: string,
    skip: number,
    limit: number
  ): Promise<IBlogs[]> => {
    return await model
      .find({ categories: { $in: categories } })
      .skip(skip)
      .limit(limit);
  };

  public updateByTitle = async (
    title: string,
    newPost: IBlogs
  ): Promise<Error | null> => {
    await model.findOneAndUpdate({ title }, newPost, { runValidators: true });
    return null;
  };

  public search = async (skip: number, limit: number, value: string) => {
    return await model
      .find({
        $or: [
          { title: { $regex: value, $options: "i" } },
          { categories: { $regex: value, $options: "i" } },
          { "writer.name": { $regex: value, $options: "i" } },
          { "writer.id": { $regex: value, $options: "i" } },
          { tags: { $regex: value, $options: "i" } },
        ],
      })
      .skip(skip)
      .limit(limit);
  };


  // public filter = async (conditionObj: any) => {
  //   return await model.find(conditionObj);
  // };

  public getAllBulkUploads = async (
    skip: number,
    limit: number
  ): Promise<IBulkUpload[] | Error | null> => {
    return await BulkUpload.find().skip(skip).limit(limit);
  };

  public getAllErrorDetails = async (
    skip: number,
    limit: number
  ): Promise<IBulkError[] | Error | null> => {
    return await BulkErrorDetail.find().skip(skip).limit(limit);
  };
}
export default Repo;
