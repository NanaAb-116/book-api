const express = require("express");
const app = express();
const connectDB = require("./db/connect.js");
require("dotenv").config();
const cors = require("cors");

const authRouter = require("./routes/authRoutes");
const books = require("./routes/books");

// middleware
app.use(express.json());
app.use(cors());

// routes
app.use("/api/v1/auth", authRouter);
app.use("/api/v1/books", books);

const port = process.env.PORT || 4000;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URL);
    app.listen(port, console.log(`Server is listening on port ${port}...`));
  } catch (error) {
    console.log(error);
  }
};

start();
