const mongoose = require('mongoose');

const CalculationSchema = new mongoose.Schema({
  operation: {
    type: String,
    required: true,
  },
  operands: {
    type: [Number],
    required: true,
  },
  result: {
    type: Number,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },

  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
});

module.exports = mongoose.model('Calculation', CalculationSchema);
