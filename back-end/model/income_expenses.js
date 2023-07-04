import express from "express";

const app = express();

app.use(express.json());

const incomeModel = mongoose.model("income", incomeSchema); // 'income' is the name of the collection
const expenseModel = mongoose.model("expense", expenseSchema); // 'expense' is the name of the collection

const incomeSchema = new mongoose.Schema({
    amount: { type: Number, required: true },
    category: { type: String, required: true },
    date: { type: Date, required: true },
    time: { type: String, required: true },
});

const expenseSchema = new mongoose.Schema({
    amount: { type: Number, required: true },
    category: { type: String, required: true },
    date: { type: Date, required: true },
    time: { type: String, required: true },
});

app.post("/income", async (req, res) => {
    const income = req.body;
    const newIncome = new incomeModel(income);
    try {
        await newIncome.save();
        res.status(201).json(newIncome);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
});

app.post("/expense", async (req, res) => {
    const expense = req.body;
    const newExpense = new expenseModel(expense);
    try {
        await newExpense.save();
        res.status(201).json(newExpense);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
});
