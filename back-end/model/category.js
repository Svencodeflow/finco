import mongoose from "mongoose";

const categorySchema = new mongoose.Schema({
    expense: [
        {
            title: String,
        },
    ],
    incoming: [
        {
            title: String,
        },
    ],
});

const Category = mongoose.model("Category", categorySchema);

const expense = [
    { title: "Shopping" },
    { title: "Other" },
    { title: "Fixed costs" },
    { title: "Spare time" },
];

const incoming = [
    { title: "Pocket money" },
    { title: "passive income" },
    { title: "other" },
];

Category.create({ expense, incoming });

export { Category };
