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
export { Avatar } from "./Avatar.js";

export { income, expense } from "./income_expenses.js";
export { Category } from "./category.js";

// dotenv.config({ path: new URL("../../.env", import.meta.url).pathname });

mongoose.connect(process.env.DB);
