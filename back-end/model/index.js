import dotenv from "dotenv";
import mongoose from "mongoose";
export default mongoose;

export { User } from "./User.js";
export { Post } from "./Post.js";
export {
  ResetToken,
  createResetToken,
  validateResetToken,
} from "./ResetToken.js";

dotenv.config({ path: new URL("../../.env", import.meta.url).pathname });

mongoose.connect(process.env.DB);
