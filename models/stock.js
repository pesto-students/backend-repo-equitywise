const mongoose = require('mongoose');

const StockSchema = new mongoose.Schema({
  symbol: {
    type: String,
    required: true,
    unique: true
  },
  name: {
    type: String,
    required: true
  },
  marketPrice: {
    type: Number,
    required: true
  },
  marketCap: Number,
  volume: Number,
  currentPrice: Number,
  percentChange: Number,
  dayLow: Number,
  dayHigh: Number,
  fiftyTwoWeekLow: Number,
  fiftyTwoWeekHigh: Number,
  peRatio: Number,
  debtToEquity: Number,
  quickRatio: Number,
  yoyRevenueGrowth: Number
}, {
  timestamps: true
});

const Stock = mongoose.model('Stock', StockSchema);
module.exports = Stock;
