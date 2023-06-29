import express from "express";
import dotenv from "dotenv";
import Multer from "multer";
import { v2 as cloudinary } from "cloudinary";

import { User, createResetToken, validateResetToken } from "./model/index.js";
import { authenticateToken, generateAccessToken } from "./lib/jwt.js";
import cookieParser from "cookie-parser";
import { sendMail } from "./lib/email.js";

dotenv.config({ path: new URL("../.env", import.meta.url).pathname });

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

async function handleUpload(file) {
  const res = await cloudinary.uploader.upload(file, {
    resource_type: "auto",
  });
  return res;
}

const storage = new Multer.memoryStorage();
const upload = Multer({
  storage,
});

const PORT = process.env.BE_PORT || 3000;
const app = express();

const ReactAppDistPath = new URL("../front-end/dist/", import.meta.url);
const ReactAppIndex = new URL("../front-end/dist/index.html", import.meta.url);

// Parse req.body (json string) zu einem
// js object
app.use(express.json());
app.use(cookieParser());
app.use(express.static(ReactAppDistPath.pathname));
/*
 * express.static match auf jede Datei im angegebenen Ordner
 * und erstellt uns einen request handler for FREE
 * app.get("/",(req,res)=> res.sendFile("path/to/index.html"))
 * app.get("/index.html",(req,res)=> res.sendFile("path/to/index.html"))
 */
app.get("/api/status", (req, res) => {
  res.send({ status: "Ok" });
});

app.post("/api/signup", async (req, res) => {
  // Neuen User erstellen
  const { name, email } = req.body;
  const newUser = new User({ name, email });
  // user.setPassword (hash und salt setzen)
  newUser.setPassword(req.body.password);
  // user speichern
  try {
    await newUser.save();
    return res.send({
      data: {
        message: "New user created",
        user: { name, email },
      },
    });
  } catch (e) {
    console.error(e);
    if (e.name === "ValidationError") {
      return res.status(400).send({ error: e });
    }

    // Duplication Error email existiert bereits als user
    if (e.name === "MongoServerError" && e.code === 11000) {
      console.log("Account exists already");
      return res.status(400).send({
        error: { message: "Username and Password combination not valid" },
      });
    }

    return res.status(500).send({ error: { message: "Unknown Server error" } });
  }
});
app.post("/api/login", async (req, res) => {
  const { email } = req.body;
  // finde user mit email
  // hash und salt sind im schema als select false deklariert
  // um sie mit auszugeben müssen wir sie explicit selectieren
  const user = await User.findOne({ email }).select("+hash").select("+salt");
  if (!user) {
    return res
      .status(401)
      .send({ error: { message: "Email and password combination wrong!" } });
  }

  // vergleiche passwort mit user.verifyPassword
  const isVerified = user.verifyPassword(req.body.password);
  if (isVerified) {
    const token = generateAccessToken({ email });
    res.cookie("auth", token, { httpOnly: true, maxAge: 1000 * 60 * 30 });
    return res.send({ data: { token } });
  }

  res
    .status(401)
    .send({ error: { message: "Email and password combination wrong!" } });
});

app.post("/api/resetPassword", async (req, res) => {
  const { email } = req.body;
  if (!email) {
    return res.status(400).send({ error: "Define an email to reset password" });
  }

  const user = await User.findOne({ email });

  res.send({ message: `Password reset email send for: ${email}`, email });

  if (user) {
    await createResetToken(user);
  }
});

app.post("/api/setpassword", async (req, res) => {
  const { token, password, id } = req.body;

  try {
    const user = await validateResetToken(id, token);
    user.setPassword(password);
    await user.save();
    return res.send({ message: "Password updated" });
  } catch (error) {
    if (error.message) {
      return res.status(500).send(error.message);
    }
    return res.status(500).send("Unknown error");
  }
});

app.get("/api/logout", (req, res) => {
  res.clearCookie("auth");
  res.send("Ok");
});

app.get("/api/verified", authenticateToken, async (req, res) => {
  const user = await User.findOne({ email: req.userEmail });
  res.send(user);
});

app.post(
  "/api/upload/avatar",
  authenticateToken,
  upload.single("avatar"),
  async (req, res) => {
    try {
      const b64 = Buffer.from(req.file.buffer).toString("base64");
      let dataURI = "data:" + req.file.mimetype + ";base64," + b64;
      const cldRes = await handleUpload(dataURI);
      res.json(cldRes);
    } catch (error) {
      console.log(error);
      res.status(500).send({
        message: error.message,
      });
    }
  }
);

app.get("/*", (req, res) => {
  res.sendFile(ReactAppIndex.pathname);
});

app.listen(PORT, () => {
  console.log("Server running on Port: ", PORT);
});
