const mongoose = require('mongoose');

const CalculationSchema = new mongoose.Schema({
  operation: String,
  operands: [Number],
  result: Number,
  createdAt: { type: Date, default: Date.now },
});

const UserSchema = new mongoose.Schema({
  id: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  calculations: [CalculationSchema],
});

module.exports = mongoose.model('User', UserSchema);
