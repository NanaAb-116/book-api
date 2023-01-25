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

router.route("/").get(getAllBooks).post(addBook);
router.route("/:author").get(getBook);
router.route("/:id").patch(updateBook).delete(deleteBook);

module.exports = router;
