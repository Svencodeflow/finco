import mongoose from "mongoose";
export default mongoose;

export { User } from "./User.js";

export {
    ResetToken,
    createResetToken,
    validateResetToken,
} from "./ResetToken.js";
export { Avatar } from "./Avatar.js";

export { Income, Expense } from "./income_expenses.js";
export { Category } from "./category.js";
export { ReactAppIndex, ReactAppDistPath } from "../config/config.js";

mongoose.connect(process.env.DB);

const db = mongoose.connection;

db.on("error", (err) => {
    console.error("MongoDB connection error:", err);
});
db.once("open", () => {
    console.log("Connected to MongoDB");
});
