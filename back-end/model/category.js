import mongoose from "mongoose";

const categorySchema = new mongoose.Schema(
  {
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
  },
  { runValidators: { maxTimeMS: 30000 } }
);

const Category = mongoose.model("Category", categorySchema);

const expense = [
  { title: "Shopping" },
  { title: "Other" },
  { title: "Fixed costs" },
  { title: "Spare time" },
];

const incoming = [
  { title: "Pocket money" },
  { title: "Passive income" },
  { title: "Other" },
];

mongoose.set("debug", true);

Category.create({ expense: expense, incoming: incoming })
  .then(() => {
    console.log('Category document created successfully');
  })
  .catch((error) => {
    console.error('Failed to create Category document:', error);
  });

export { Category };
