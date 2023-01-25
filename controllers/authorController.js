const Author = require("../models/Author");

const getAuthors = async (req, res) => {
  const authors = await Author.find({});
  res.status(200).json({ success: true, authors }).populate("book");
};

module.exports = { getAuthors };
