import mongoose from "mongoose";
import { IBlogs } from "../entity/IBlogs";

const schema = new mongoose.Schema<IBlogs>(
  {
    title: {
      type: String,
      required: true,
    },
    body: {
      description: { type: String, required: true },
      links: { type: String },
    },
    imageUrl: { type: String },
    categories: {
      type: String,
      enum: ["travel", "study", "fitness", "lifestyle", "sports"],
      default: "sports",
      lowercase: true,
    },
    likes: { type: Number },
    approved: { type: Boolean, required: true },
    isSensitive: {
      type: Boolean,
      default: false,
      required: true,
    },
    tags: { type: String },
    writer: {
      id: { type: String },
      name: { type: String },
      email: { type: String },
      profilePicUrl: { type: String },
      famousWorks: { type: String },
    },
  },

  {
    timestamps: true,
  }
);

export const model = mongoose.model("Blogs", schema);

export const bulkModel = mongoose.model("BulkUploads", schema);
