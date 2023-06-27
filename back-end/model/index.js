import dotenv from "dotenv";
import mongoose from "mongoose";

// Import the User model from the User.js file
export { User } from "./User.js";

// Load the environment variables from the .env file
dotenv.config({ path: new URL("../../.env", import.meta.url).pathname });

// Connect to MongoDB
mongoose.connect(process.env.DB);
