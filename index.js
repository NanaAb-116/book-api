const express = require("express");
const app = express();
const books = require("./routes/books");
const connectDB = require("./db/connect.js");
require("dotenv").config();

// middleware
app.use(express.json());

// routes
app.use("/api/v1/books", books);

const port = process.env.PORT || 5000;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URL);
    app.listen(port, console.log(`Server is listening on port ${port}...`));
  } catch (error) {
    console.log(error);
  }
};

start();
