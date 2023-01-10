const mongoose = require("mongoose");

const BookSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Must provide title"],
      trim: true,
    },
    author: {
      type: String,
      required: [true, "Must provide author"],
      trim: true,
    },
    description: {
      type: String,
      required: [true, "Must provide description"],
      trim: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Books", BookSchema);
