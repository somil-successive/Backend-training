import mongoose from "mongoose";
import { IBlogs } from "../entity/IBlogs";

const schema = new mongoose.Schema<IBlogs>(
  {
    title: { type: String },
    body: { type: String },
    likes: { types: String },
    imageUrl: { type: Buffer },
    categories : {type:[String]},
    isSensitive: { type: Boolean },
  },
  {
    timestamps: true,
  }
);
export const model = mongoose.model("Blogs", schema);
