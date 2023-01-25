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
