const express = require("express");
const router = express.Router();

const {
  getAllBooks,
  addBook,
  getBook,
  updateBook,
  deleteBook,
} = require("../controllers/book");

router.route("/").get(getAllBooks).post(addBook);
router.route("/:id").get(getBook).patch(updateBook).delete(deleteBook);

module.exports = router;
