const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const StockPurchaseSchema = new mongoose.Schema({
  stockId: {
    type: Schema.Types.ObjectId,
    ref: 'Stock',
    required: true
  },
  purchaseDate: {
    type: Date,
    required: true
  },
  noOfShares: {
    type: Number,
    required: true
  },
  avgCost: {
    type: Number,
    required: true
  }
}, {
  _id: false
});

const UserPortfolioSchema = new mongoose.Schema({
  userId: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  stocks: [StockPurchaseSchema]
}, {
  timestamps: true
});

const UserPortfolio = mongoose.model('UserPortfolio', UserPortfolioSchema);
module.exports = UserPortfolio;
