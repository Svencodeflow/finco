import crypto from "crypto";
import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true, lowercase: true },
    salt: { type: String, required: true, select: false },
    hash: { type: String, required: true, select: false },
});

// set password | only use function expressions instead of arrow functions
userSchema.methods.setPassword = function (password) {
    // create salt
    this.salt = crypto.randomBytes(64).toString("hex");
    // hash password with salt
    this.hash = crypto
        .pbkdf2Sync(password, this.salt, 1000, 64, "sha512")
        .toString("hex");
};

// verifyPassword
userSchema.methods.verifyPassword = function (password) {
    const hash = crypto
        .pbkdf2Sync(password, this.salt, 1000, 64, "sha512")
        .toString("hex");

    return this.hash === hash;
};

export const User = mongoose.model("User", userSchema);
