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

mongoose
    .connect(
        "mongodb+srv://schlaakboot:PTxx3ThzhU48G1ly@cluster0.4ebigbt.mongodb.net/finco",
        {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            serverSelectionTimeoutMS: 30000,
        }
    )
    .then(() => {
        console.log("Connected to MongoDB");
    })
    .catch((error) => {
        console.error("Failed to connect to MongoDB:", error);
    });

console.log("process.env.DB", process.env.DB);

const db = mongoose.connection;

db.on("error", (err) => {
    console.error("MongoDB connection error:", err);
});
db.once("open", () => {
    console.log("Connected to MongoDB");
});
