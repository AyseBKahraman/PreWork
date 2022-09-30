const mongoose = require("mongoose");
const movieSchema = new mongoose.Schema({
  title: { type: String, required: true },
  director: { type: String, required: true },
  imageUrl: { type: String, required: true },
  price: {type: String, required: true},
  isAvailable: Boolean,
  
});
const Movie = mongoose.model("Movie", movieSchema);
module.exports = Movie;