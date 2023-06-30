import mongoose from "mongoose";

const postSchema = new mongoose.Schema({
  title: String,
  content: String,
  author: { type: mongoose.SchemaTypes.ObjectId, ref: "User" },
  tags: [String],
});

export const Post = mongoose.model("Post", postSchema);
