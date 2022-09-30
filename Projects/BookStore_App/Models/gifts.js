const mongoose = require("mongoose");
const giftSchema = new mongoose.Schema({
  name: { type: String, required: true },
  producer: { type: String, required: true },
  imageUrl: { type: String, required: true },
  price: {type: String, required: true},
  isAvailable: Boolean,
  
});
const Gift = mongoose.model("Gift", giftSchema);
module.exports = Gift;