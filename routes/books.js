const express = require("express");
const router = express.Router();
const authMiddleware = require("../middleware/auth");

const {
  getAllBooks,
  addBook,
  getBook,
  updateBook,
  deleteBook,
} = require("../controllers/book");
const { getAuthors } = require("../controllers/authorController");

router.route("/authors").get(getAuthors);

router
  .route("/")
  .get(authMiddleware, getAllBooks)
  .post(authMiddleware, addBook);
router.route("/:author").get(authMiddleware, getBook);
router
  .route("/:id")
  .patch(authMiddleware, updateBook)
  .delete(authMiddleware, deleteBook);

module.exports = router;
