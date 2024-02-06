import mongoose from "mongoose";
import { IUser } from "../entity/IUser";

const userSchema = new mongoose.Schema<IUser>({
  name: { type: String },
  email: { type: String },
  phone: { type: String },
  address: { type: String },
  password: { type: String },
});

const User = mongoose.model<IUser>("User", userSchema);

export default User;
