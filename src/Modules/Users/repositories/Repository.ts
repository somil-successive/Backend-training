import { string } from "joi";
import BaseRepo from "../../../libs/base/BaseRepo.js";
import { IUser } from "../entity/IUser.js";
import User from "./Schema.js";

class Repo extends BaseRepo<IUser> {
  constructor() {
    super(User);
  }
  public getByName = async (name: string) => {
    return await User.findOne({ name });
  };

  public getByEmail = async (email: string) => {
    return await User.findOne({ email });
  };

  public deleteByName = async (name: string) => {
    return await User.findOneAndDelete({ name });
  };

}
export default Repo;
