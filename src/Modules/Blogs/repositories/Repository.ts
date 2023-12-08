import mongoose from "mongoose";
import { model } from "./Schema.js";
import { IBlogs } from "../entity/IBlogs.js";

class Repo {
    public getAll=async()=>{
        return await model.find();
    }
    public create=async(data:IBlogs)=>{
        await model.insertMany(data);

    }

}
export default Repo;