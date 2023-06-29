import mongoose from "mongoose";
import crypto from "crypto";

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true, lowercase: true },
  salt: { type: String, required: true, select: false },
  hash: { type: String, required: true, select: false },
});

// set password | only use function expressions instead of arrow functions
userSchema.methods.setPassword = function (password) {
  // Salt erstellen
  this.salt = crypto.randomBytes(64).toString("hex");
  // Password mit salt hashen
  this.hash = crypto
    .pbkdf2Sync(password, this.salt, 1000, 64, "sha512")
    .toString("hex");
};

export const User = mongoose.model("User", userSchema);
