import express from "express";
import dotenv from "dotenv";
import { User } from "./model/index.js";

dotenv.config({ path: new URL("../.env", import.meta.url).pathname });

const PORT = process.env.BE_PORT || 3000;
const app = express();

app.use(express.json());

app.get("/api/status", (req, res) => {
  res.send({ status: "Ok" });
});

app.post("/api/signup", async (req, res) => {
  // Neuen User erstellen
  const { name, email, password } = req.body;
  const newUser = new User({ name, email, password });

  try {
    await newUser.save();
    return res.send({
      data: {
        message: "New user created",
        user: { name, email, password },
      },
    });
  } catch (e) {
    console.error(e);
    if (e.name === "ValidationError") {
      return res.status(400).send({ error: e });
    };

    // Duplication Error email existiert bereits als user
    if (e.name === "MongoServerError" && e.code === 11000) {
      console.log("Account exists already");
      return res.status(400).send({
        error: { message: "Username and Password combination not valid" },
      });
    };

    return res.status(500).send({ error: { message: "Unknown Server error" } });
  };
});

app.get("/*", (req, res) => {
  res.sendFile(ReactAppIndex.pathname);
});

app.listen(PORT, () => {
  console.log("Server running on Port: ", PORT);
});
