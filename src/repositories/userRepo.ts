import IUser from "../interfaces/IUser.js";
import User from "../model/userModel.js";

class UserRepo{

    public getAllUsers = async()=>{
         return  await User.find();
    }

    public createUser = async (user : IUser)=>{
        await User.create(user);
    }
    
}
export default UserRepo;