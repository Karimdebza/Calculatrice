const calculator = require('../utils/calculator');
const User = require('../models/User');

exports.calculate = async (req, res) => {
  const { operation, operands } = req.body;
  try {
    const result = calculator[operation](operands);

    req.user.calculations.push({ operation, operands, result });
    await req.user.save();
    res.json({ result });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
