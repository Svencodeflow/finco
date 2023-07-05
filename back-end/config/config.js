import dotenv from "dotenv";
import path from "path";

// option 1: Windos
import { fileURLToPath } from "url";
dotenv.config({ path: fileURLToPath(new URL("../../.env", import.meta.url)) });

// option 2: Linux

// dotenv.config({ path: new URL("../../.env", import.meta.url).pathname });
