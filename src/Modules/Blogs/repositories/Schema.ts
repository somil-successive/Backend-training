import mongoose from "mongoose";
import { IBlogs } from "../entity/IBlogs";

const schema = new mongoose.Schema<IBlogs>({
  title: { type: String },
  body: { type: String },
  createdAt: { type: Date },
  lastEdited: { type: Date },
  likes: { types: String },
  imageUrl: { type: Buffer },
  isSensitive: { type: Boolean },
});
export const model = mongoose.model("Blogs", schema);
