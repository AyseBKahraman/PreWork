const mongoose = require("mongoose");
const ebookSchema = new mongoose.Schema({
  title: { type: String, required: true },
  author: { type: String, required: true },
  imageUrl: { type: String, required: true },
  price: {type: String, required: true},
  copy: {type: String, required: true},
  isAvailable: Boolean,
  
});
// the Outline for ALL ebooks we create/populate in dataset
const Ebook = mongoose.model("Ebook", ebookSchema);
module.exports = Ebook;