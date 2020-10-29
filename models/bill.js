const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const billSchema = new Schema({
  title: { type: String, required: true },
  amount: { type: Number, required: true },
  dueDate: { type: Date, required: true },
  frequency: { type: String, required: true },
  userId: { type: Number, required: true }
});

const Bill = mongoose.model('Bills', billSchema);

module.exports = Bill;