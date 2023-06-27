import mongoose from "mongoose";

// Define a new schema for users
const UserSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true, lowercase: true },
  password: { type: String },
});

// Create the User model from the schema
export const User = mongoose.model("User", UserSchema);
