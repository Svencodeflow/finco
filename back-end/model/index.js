import mongoose from "mongoose";
export default mongoose;

export { User } from "./User.js";

export {
    ResetToken,
    createResetToken,
    validateResetToken,
} from "./ResetToken.js";

export { Income, Expense } from "./income_expenses.js";
export { Category } from "./category.js";
export { ReactAppIndex } from "../config/config.js";

mongoose.connect(process.env.DB, { useNewUrlParser: true, useUnifiedTopology: true, serverSelectionTimeoutMS: 30000 })
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((error) => {
    console.error('Failed to connect to MongoDB:', error);
  });

console.log("process.env.DB", process.env.DB);

const db = mongoose.connection;

db.on("error", (err) => {
    console.error("MongoDB connection error:", err);
});
db.once("open", () => {
    console.log("Connected to MongoDB");
});
