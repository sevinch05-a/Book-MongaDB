const Clothe = require("../models/book.model");

///// get all books
const getBooks = async (req, res) => {
  try {
    const books = await books.find({});
    res.status(200).json(books);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


/// get one book
const getBook = async (req, res) => {
  try {
    const { id } = req.params;
    const book = await book.findById(id);
    res.status(200).json(book);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};




////// create books
const createBook = async (req, res) => {
  try {
    const book = await book.create(req.body);
    res.status(200).json(book);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};




///update books
const updatedBook = async (req, res) => {
  try {
    const { id } = req.params;

    const book= await book.findByIdAndUpdate(id, req.body);

    if (!book) {
      return res.status(404).json({ message: "Books not found" });
    }

    const updatedBook = await book.findById(id);
    res.status(200).json(updatedBook);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};



////// delete book
const deleteBook = async (req, res) => {
  try {
    const { id } = req.params;

    const book = await book.findByIdAndDelete(id);

    if (!book) {
      return res.status(404).json({ message: "Books not found" });
    }

    res.status(200).json({ message: "Books deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};



module.exports = {
  getBooks,
  getBook,
  createBook,
  updatedBook,
  deleteBook
};