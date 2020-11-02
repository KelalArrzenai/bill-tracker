const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const billSchema = new Schema({
  name: { type: String, required: true },
  date: { type: Date, required: true },
  frequency: { type: String, required: true },
  amount: { type: Number, required: true },
  // userId: { type: String, required: true }
});

const Bill = mongoose.model('Bills', billSchema);

module.exports = Bill;