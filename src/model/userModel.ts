import mongoose from 'mongoose'
import IUser from '../interfaces/IUser.js';

const userSchema = new mongoose.Schema<IUser>({

    username : {type : String},
    email : {type : String}
})

const User = mongoose.model<IUser>('User', userSchema);

export default User;
