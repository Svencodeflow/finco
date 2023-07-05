import express from "express";
import dotenv from "dotenv";
import {
    User,
    createResetToken,
    validateResetToken,
    Category,
} from "./model/index.js";
import { authenticateToken, generateAccessToken } from "./lib/jwt.js";
import cookieParser from "cookie-parser";
import { sendMail } from "./lib/email.js";
import Multer from "multer";
import { v2 as cloudinary } from "cloudinary";
import path from "path";
import { fileURLToPath } from "url";

// const ReactAppIndex = path.join(
//     new URL(process.env.PATHNAME, import.meta.url)
// );

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ReactAppIndex = path.join(__dirname, process.env.PATHNAME);

dotenv.config({ path: new URL("../.env", import.meta.url).pathname });

//--------------CLOUDINARY-CONFIG--------------\\
cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
});

//--------------CLOUDINARY-UPLOADER--------------\\
async function handleUpload(file) {
    const res = await cloudinary.uploader.upload(file, {
        resource_type: "auto",
    });
    return res;
}

//--------------MULTER-MEMORY-STORAGE--------------\\
const storage = new Multer.memoryStorage();
const upload = Multer({
    storage,
});

const PORT = process.env.BE_PORT || 3000;
const app = express();

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
        }

        // duplication Error -> email exist already
        if (e.name === "MongoServerError" && e.code === 11000) {
            console.log("Account exists already");
            return res.status(400).send({
                error: {
                    message: "Username and Password combination not valid",
                },
            });
        }

        return res
            .status(500)
            .send({ error: { message: "Unknown Server error" } });
    }
});

//--------------LOGIN--------------\\
app.post("/api/login", async (req, res) => {
    const { email } = req.body;
    /*  find user by email | Note: hash and salt are declared as select: false 
      in the schema to output them we have to select them explicitly */
    const user = await User.findOne({ email }).select("+hash").select("+salt");
    if (!user) {
        return res.status(401).send({
            error: { message: "Email and password combination is wrong!" },
        });
    }

    // compare password with user.verifyPassword
    const isVerified = user.verifyPassword(req.body.password);
    if (isVerified) {
        const token = generateAccessToken({ email });
        res.cookie("auth", token, {
            httpOnly: true,
            maxAge: 1000 * 60 * (60 * 24),
        });
        return res.send({ data: { token } });
    }

    res.status(401).send({
        error: { message: "Email and password combination is wrong!" },
    });
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
        return res
            .status(400)
            .send({ error: "Define an email to reset password" });
    }

    const user = await User.findOne({ email });

    res.send({ message: `Password reset email send for: ${email}`, email });

    if (user) {
        await createResetToken(user);
    }

    console.log({ email }, { user });
});

//--------------SET-PASSWORD--------------\\
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

//--------------UPLOAD-AVATAR--------------\\
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

//--------------GET-CATEGORIES--------------\\
app.get("/api/categories/expense", async (req, res) => {
    try {
        const data = await Category.findOne({}, "expense -_id");
        res.json(data.expense);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Internal server error" });
    }
});

app.get("/api/categories/incoming", async (req, res) => {
    try {
        const data = await Category.findOne({}, "incoming -_id");
        res.json(data.incoming);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Internal server error" });
    }
});

//--------------GET-EXPENSES--------------\\
app.get("/api/expenses", authenticateToken, async (req, res) => {
    try {
        const data = await Expense.find({ user: req.userEmail });
        res.json(data);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Internal server error" });
    }
});

//--------------ADD-EXPENSE--------------\\
app.post("/api/expenses", authenticateToken, async (req, res) => {
    try {
        const { amount, category, description, date } = req.body;
        const newExpense = new Expense({
            amount,
            category,
            description,
            date,
            user: req.userEmail,
        });
        await newExpense.save();
        res.json(newExpense);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Internal server error" });
    }
});

//--------------DELETE-EXPENSE--------------\\
app.delete("/api/expenses/:id", authenticateToken, async (req, res) => {
    try {
        const { id } = req.params;
        const deletedExpense = await Expense.findByIdAndDelete(id);
        res.json(deletedExpense);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Internal server error" });
    }
});

//--------------UPDATE-EXPENSE--------------\\
app.put("/api/expenses/:id", authenticateToken, async (req, res) => {
    try {
        const { id } = req.params;
        const { amount, category, description, date } = req.body;
        const updatedExpense = await Expense.findByIdAndUpdate(
            id,
            {
                amount,
                category,
                description,
                date,
            },
            { new: true }
        );
        res.json(updatedExpense);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Internal server error" });
    }
});

//--------------GET-INCOMES--------------\\
app.get("/api/incomes", authenticateToken, async (req, res) => {
    try {
        const data = await Income.find({ user: req.userEmail });
        res.json(data);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Internal server error" });
    }
});

//--------------ADD-INCOME--------------\\
app.post("/api/incomes", authenticateToken, async (req, res) => {
    try {
        const { amount, category, description, date } = req.body;
        const newIncome = new Income({
            amount,
            category,
            description,
            date,
            user: req.userEmail,
        });
        await newIncome.save();
        res.json(newIncome);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Internal server error" });
    }
});

//--------------DELETE-INCOME--------------\\
app.delete("/api/incomes/:id", authenticateToken, async (req, res) => {
    try {
        const { id } = req.params;
        const deletedIncome = await Income.findByIdAndDelete(id);
        res.json(deletedIncome);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Internal server error" });
    }
});

//--------------UPDATE-INCOME--------------\\

app.put("/api/incomes/:id", authenticateToken, async (req, res) => {
    try {
        const { id } = req.params;
        const { amount, category, description, date } = req.body;
        const UpdateIncome = await Income.findByIdAndUpdate(
            id,
            {
                amount,
                category,
                description,
                date,
            },
            { new: true }
        );
        res.json(UpdateIncome);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Internal server error" });
    }
});

app.get("/*", (req, res) => {
    res.sendFile(ReactAppIndex);
});

app.listen(PORT, () => {
    console.log("Server running on Port: ", PORT);
});
