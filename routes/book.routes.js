const express = require("express");
const Book = require("../models/books.model.js")
const router = express.Router();
const {getBooks, getBook, createBook, updatedBook, deleteBook} = require('../controllers/books.controller.js')




router.get('/', getBooks)
router.get("/:id", getBook)
router.post("/", createBook);
router.put("/:id", updatedBook)
router.delete("/:id", deleteBook)




module.exports = router;