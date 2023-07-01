import express from "express";
import dotenv from "dotenv";
import { User, createResetToken } from "./model/index.js";
import { authenticateToken, generateAccessToken } from "./lib/jwt.js";
import cookieParser from "cookie-parser";
import { sendMail } from "./lib/email.js";

dotenv.config({ path: new URL("../.env", import.meta.url).pathname });

const PORT = process.env.BE_PORT || 3000;
const app = express();

app.use(express.json()); //jasonParser to a js object
app.use(express.json());
app.use(cookieParser());

app.get("/api/status", (req, res) => {
  res.send({ status: "Ok" });
});

//--------------SIGNUP--------------\\
app.post("/api/signup", async (req, res) => {
  // create new user
  const { name, email } = req.body;
  const newUser = new User({ name, email });
  // user.setPassword (set hash and salt)
  newUser.setPassword(req.body.password);
  
  // save user
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
    };

    // duplication Error -> email exist already
    if (e.name === "MongoServerError" && e.code === 11000) {
      console.log("Account exists already");
      return res.status(400).send({
        error: { message: "Username and Password combination not valid" },
      });
    };

    return res.status(500).send({ error: { message: "Unknown Server error" } });
  };
});

//--------------LOGIN--------------\\
app.post("/api/login", async (req, res) => {
  const { email } = req.body;
  /*  find user by email | Note: hash and salt are declared as select: false 
      in the schema to output them we have to select them explicitly */
  const user = await User.findOne({ email }).select("+hash").select("+salt");
  if (!user) {
    return res
      .status(401)
      .send({ error: { message: "Email and password combination is wrong!" } });
  };

  // compare password with user.verifyPassword
  const isVerified = user.verifyPassword(req.body.password);
  if (isVerified) {
    const token = generateAccessToken({ email });
    res.cookie("auth", token, { httpOnly: true, maxAge: 1000 * 60 * (60 * 24) });
    return res.send({ data: { token } });
  };

  res
    .status(401)
    .send({ error: { message: "Email and password combination is wrong!" } });
});

//--------------VERIFIY-EMAIL--------------\\
app.get("/api/verified", authenticateToken, async (req, res) => {
  const user = await User.findOne({ email: req.userEmail });
  res.send(user);
  console.log({ user });
});

//--------------LOGOUT--------------\\
app.get("/api/logout", (req, res) => {
  res.clearCookie("auth");
  res.send("Logged out");
});

//--------------RESET-PASSWORD--------------\\
app.post("/api/resetPassword", async (req, res) => {
  const { email } = req.body;

  if (!email) {
    return res.status(400).send({ error: "Define an email to reset password" });
  };

  const user = await User.findOne({ email });

  res.send({ message: `Password reset email send for: ${email}`, email });

  if (user) {
    await createResetToken(user);
  };

  console.log({ email }, { user });
});

app.get("/*", (req, res) => {
  res.sendFile(ReactAppIndex.pathname);
});

app.listen(PORT, () => {
  console.log("Server running on Port: ", PORT);
});
