import BaseRepo from "../../../libs/base/BaseRepo";
import { IUser } from "../entity/IUser";
import User from "./Schema";

class Repo extends BaseRepo<IUser> {
  constructor() {
    super(User);
  }
  public getByName = async (name: string): Promise<IUser | null> => {
    return await User.findOne({ name });
  };

  public getByEmail = async (email: string): Promise<IUser | null> => {
    return await User.findOne({ email });
  };

  public deleteByName = async (name: string) => {
    return await User.findOneAndDelete({ name });
  };
}
export default Repo;
