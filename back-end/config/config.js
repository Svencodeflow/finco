import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";

dotenv.config({
    path: fileURLToPath(new URL("../../.env", import.meta.url)),
});

// console.log("process.env.PATHNAME", fileURLToPath(new URL("../../.env", import.meta.url)));

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
// const ReactAppIndex = path.join(__dirname, process.env.PATHNAME);
const ReactAppIndex = path.join(__dirname, "../../front-end/dist/index.html");
const ReactAppDistPath = path.join(__dirname, "../../front-end/dist/");

export { ReactAppIndex, ReactAppDistPath };
