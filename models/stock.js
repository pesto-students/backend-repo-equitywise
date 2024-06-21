const mongoose = require('mongoose');
const user = require('./user')
const Schema = mongoose.Schema;

// User Schema


// Stock Schema
const StockSchema = new Schema({
    symbol: { type: String, required: true },
    name: { type: String, required: true },
    shares: { type: Number, required: true },
    purchasePrice: { type: Number, required: true },
    purchaseDate: { type: Date, default: Date.now }
});

// Portfolio Schema
const PortfolioSchema = new Schema({
    user: { type: String, ref: 'user', required: true },
    stocks: [StockSchema]
});

// Create models
const Stock = mongoose.model('Stock', StockSchema);
const Portfolio = mongoose.model('Portfolio', PortfolioSchema);

async function stockInsert(req, res) {
    const { userId } = req.query;
    const { symbol, name, shares, purchasePrice } = req.body;
    console.log("userId: ",userId);
    console.log("params",req.query);
    try {
        const extuser = await user.findOne(userId);
        if (!extuser) {
            return res.status(404).json({ error: 'User not found' });
        }
        // Find the portfolio
        console.log("UserId: "+ userId);
        let portfolio = await Portfolio.findOne({ user: userId });

        // If portfolio does not exist, create a new one
        if (!portfolio) {
            portfolio = new Portfolio({ user: userId, stocks: [] });
        }

        // Create a new stock
        const stock = new Stock({ symbol, name, shares, purchasePrice });

        // Add the stock to the portfolio
        portfolio.stocks.push(stock);

        // Save the portfolio
        await portfolio.save();

        res.status(201).json(portfolio);
    } catch (error) {
        console.error("error while inserting data in stock",error.message);
        res.status(500).json({ error: error.message });
    }
}

async function getStock(req,res){
    const { userId } = req.query;
   try{
    let portfolio = await Portfolio.findOne({ user: userId });
    if (!portfolio) {
        return res.status(404).json({ error: 'Portfolio not found' });
        }
        res.status(200).json(portfolio);
        }catch(error){
            console.error("error while fetching data from stock",error.message);
            res.status(500).json({ error: error.message });
        }

   }

module.exports = { Stock, Portfolio ,stockInsert, getStock};
