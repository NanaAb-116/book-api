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
    // author: {
    //   type: mongoose.Schema.ObjectId,
    //   ref: "Author",
    //   required: true,
    // },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Book", BookSchema);
