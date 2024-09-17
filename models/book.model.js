const mongoose = require("mongoose");

const BooksSchema = mongoose.Schema (
{ 
    name: String,
    color:String,
    size: Number,
    language:String
},
);


const Books = mongoose.model("Books", BooksSchema)
module.exports = Books;