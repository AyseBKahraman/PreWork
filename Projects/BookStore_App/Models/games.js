const mongoose = require("mongoose");
const gameSchema = new mongoose.Schema({
  name: { type: String, required: true },
  producer: { type: String, required: true },
  imageUrl: { type: String, required: true },
  price: {type: String, required: true},
  isAvailable: Boolean,
  
});
const Game = mongoose.model("Game", gameSchema);
module.exports = Game;