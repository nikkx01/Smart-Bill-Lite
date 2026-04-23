const mongoose = require("mongoose");

const billSchema = new mongoose.Schema({
  userId: mongoose.Schema.Types.ObjectId,
  customer: String,
  amount: Number,
  date: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Bill", billSchema);