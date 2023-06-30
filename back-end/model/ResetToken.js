import crypto from "crypto";
import bcrypt from "bcrypt";
import { Schema, model } from "mongoose";
import { User } from "./User.js";
import { sendMail } from "../lib/email.js";
import { passwortResetTemplate } from "../lib/emailTemplates.js";

const tokenSchema = new Schema({
  userId: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: "User",
  },
  token: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
    expires: 3600, // this is the expiry time in seconds
  },
});

export const ResetToken = model("ResetToken", tokenSchema);

export const createResetToken = async (user) => {
  let token = await ResetToken.findOne({ userId: user._id });
  if (token) await token.deleteOne();

  let resetToken = crypto.randomBytes(32).toString("hex");
  const hash = await bcrypt.hash(resetToken, Number(10));

  await new ResetToken({
    userId: user._id,
    token: hash,
    createdAt: Date.now(),
  }).save();

  const clientURL = process.env.CLIENT_URL;
  const url = new URL(
    "/passwordReset?token=" + resetToken + "&id=" + user._id,
    clientURL
  );

  const mailHTML = passwortResetTemplate({
    userName: user.name,
    resetLink: url.toString(),
  });

  await sendMail({
    to: [user.email],
    subject: "SuperApp: Password Reset",
    html: mailHTML,
  });
};

export const validateResetToken = async (userId, resetToken) => {
  const passwordResetToken = await ResetToken.findOne({ userId })
    .populate("userId")
    .catch(console.error);

  if (!passwordResetToken) {
    console.log("no token found");
    throw new Error("Token expired");
  }

  const isValid = await bcrypt.compare(resetToken, passwordResetToken.token);

  if (!isValid) {
    console.log("token not valid");
    throw new Error("Token expired");
  }

  return passwordResetToken.userId;
};
