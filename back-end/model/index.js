import dotenv from "dotenv";
import mongoose from "mongoose";
import { fileURLToPath } from "url";
export default mongoose;

export { User } from "./User.js";

export {
    ResetToken,
    createResetToken,
    validateResetToken,
} from "./ResetToken.js";

dotenv.config({ path: new URL("../../.env", import.meta.url).pathname });

//
//! windows
//
// dotenv.config({ path: fileURLToPath(new URL("../../.env", import.meta.url)) });

mongoose.connect(process.env.DB);
