import { IUser } from "../entity/IUser.js";
import User from "./Schema.js";

class Repo {
  public getAllUsers = async () => {
    return await User.find();
  };

  public createUser = async (user: IUser) => {
    await User.create(user);
  };
}
export default Repo;
