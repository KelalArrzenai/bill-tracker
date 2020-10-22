const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const billSchema = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: false },
  amount: { type: Number, required: true },
  dueDate: { type: Date, required: true },
  frequency: { type: String, required: true },
  userId: { type: Number, required: true }
});

const Bill = mongoose.model('Bill', billSchema);

module.exports = Bill;