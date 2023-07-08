import mongoose from "mongoose";

const AvatarSchema = new mongoose.Schema({
  url: { type: String },
  avatar: { type: mongoose.SchemaTypes.ObjectId, ref: "User" },
});

export const Avatar = mongoose.model("Avatar", AvatarSchema);
