import IUser from "../interfaces/IUser.js";
import UserRepo from "../repositories/userRepo.js";

class UserService{

    private repo : UserRepo

    constructor(){

        this.repo = new UserRepo();
    }

    public createUser = async (user : IUser)=>{
         await this.repo.createUser(user);
    }

    public getAllUSers = async()=>{
        return await this.repo.getAllUsers();
    }


}

export default UserService;