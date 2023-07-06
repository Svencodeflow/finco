import mongoose from "mongoose";
export default mongoose;

export { User } from "./User.js";

export {
    ResetToken,
    createResetToken,
    validateResetToken,
} from "./ResetToken.js";

export { income, expense } from "./income_expenses.js";
export { Category } from "./category.js";
export { ReactAppIndex } from "../config/config.js";

mongoose.connect(process.env.DB);
