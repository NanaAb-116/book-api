const Book = require("../models/book");
const asyncWrapper = require("../middleware/asyncWrapper");
const { createCustomError } = require("../errors/custom-error");

const getAllBooks = asyncWrapper(async (req, res) => {
  const books = await Book.find({}).populate("bookAuthor");
  res
    .status(200)
    .json({ success: true, data: { books, nbHits: books.length } });
});

const addBook = asyncWrapper(async (req, res) => {
  // req.body.bookAuthor = req.body.author;
  const book = await Book.create(req.body);
  res.status(201).json({ book });
});

const getBook = asyncWrapper(async (req, res, next) => {
  const { author } = req.params;
  const book = await Book.find({ author }).populate("author");
  if (!book) {
    return next(createCustomError(`No book with author : ${author}`, 404));
  }
  res.status(200).json({ book });
});

const deleteBook = asyncWrapper(async (req, res) => {
  const { id: bookID } = req.params;
  const book = await Book.findByIdAndDelete({ _id: bookID });
  if (!book) {
    return next(createCustomError(`No book with id : ${{ _id: bookID }}`, 404));
  }
  res.status(200).json({ book: null, status: "book deleted success" });
});

const updateBook = asyncWrapper(async (req, res) => {
  const { id: bookID } = req.params;
  const book = await Book.findByIdAndUpdate({ _id: bookID }, req.body, {
    new: true,
    runValidators: true,
  });
  if (!book) {
    return next(createCustomError(`No book with id : ${bookID}`, 404));
  }
  res.status(200).json({ book });
});

module.exports = { getAllBooks, addBook, getBook, updateBook, deleteBook };
