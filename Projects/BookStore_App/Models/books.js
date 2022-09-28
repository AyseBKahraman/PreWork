const mongoose = require("mongoose");
const bookSchema = new mongoose.Schema({
  title: { type: String, required: true },
  author: { type: String, required: true },
  imageUrl: { type: String, required: true },
  price: {type: String, required: true},
  isAvailable: Boolean,
  
});
// the Outline for ALL sooks we create/populate in dataset
const Book = mongoose.model("Book", bookSchema);
module.exports = Book;