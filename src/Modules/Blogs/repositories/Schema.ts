import mongoose from "mongoose";
import { IBlogs } from "../entity/IBlogs";

const schema = new mongoose.Schema<IBlogs>(
  {
    title: { type: String },
    body: { type: String },
    imageUrl: { type: String },
    categories : {type:String},
    isSensitive: { type: Boolean },
    writer:{
      id:{type:String},
      name:{type :String},
      profileUrl: {type:String},
      famousWorks:{type:String}

    }
  },
  {
    timestamps: true,
  }
);
export const model = mongoose.model("Blogs", schema);
