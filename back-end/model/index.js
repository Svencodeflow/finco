import dotenv from "dotenv";
import mongoose from "mongoose";
export default mongoose;

export { User } from "./User.js";

export { 
  ResetToken, 
  createResetToken, 
} from "./ResetToken.js";

dotenv.config({ path: new URL("../../.env", import.meta.url).pathname });

mongoose.connect(process.env.DB);
