const mongoose = require('mongoose');
const user = require('./user')
const Schema = mongoose.Schema;

// User Schema


// WishList Schema
const WishListSchema = new Schema({
    symbol: { type: String, required: true },
    name: { type: String, required: true },
    shares: { type: Number, required: true },
    purchasePrice: { type: Number, required: true },
    purchaseDate: { type: Date, default: Date.now }
});

// Portfolio Schema
const PortfolioSchema = new Schema({
    user: { type: String, ref: 'user', required: true },
    wishlists: [WishListSchema]
});

// Create models
const Wishlist = mongoose.model('Wishlist', WishListSchema);
const WishPortfolio = mongoose.model('WishPortfolio', PortfolioSchema);

async function wishlistInsert(req, res) {
    const { userId } = req.query;
    const { symbol, name, shares, purchasePrice } = req.body;
    console.log("userId: ",userId);
    console.log("params",req.query);
    try {
        const extuser = await user.findOne(userId);
        if (!extuser) {
            return res.status(404).json({ error: 'User not found' });
        }
        // Find the wish portfolio
        console.log("UserId: "+ userId);
        let wishPortfolio = await WishPortfolio.findOne({ user: userId });

        // If portfolio does not exist, create a new one
        if (!wishPortfolio) {
            wishPortfolio = new WishPortfolio({ user: userId, Wishlist: [] });
        }
        const existingStock = wishPortfolio.wishlists.find(item => item.symbol === symbol);
        if (existingStock) {
            return res.status(400).json({ error: 'Stock already exists in the wishlist' });
        }
        // Create a new stock
        const wishlist = new Wishlist({ symbol, name, shares, purchasePrice });

        // Add the stock to the portfolio
        wishPortfolio.wishlists.push(wishlist);

        // Save the portfolio
        await wishPortfolio.save();

        res.status(201).json(wishPortfolio);
    } catch (error) {
        console.error("error while inserting data in wishlist",error.message);
        res.status(500).json({ error: error.message });
    }
}

async function getWishlist(req,res){
    const { userId } = req.query;
   try{
    let wishPortfolio = await WishPortfolio.findOne({ user: userId });
    if (!wishPortfolio) {
        return res.status(404).json({ error: 'wish list Portfolio not found' });
        }
        res.status(200).json(wishPortfolio);
        }catch(error){
            console.error("error while fetching data from wishlist",error.message);
            res.status(500).json({ error: error.message });
        }

   }

   async function updateWishListById(req,res){
    const { userId } = req.query;
    console.log("userid: " +userId);
    const { symbol, name, shares, purchasePrice } = req.body;

    try {
        let wishPortfolio = await WishPortfolio.findOne({user:userId});
        if (!wishPortfolio) {
            return res.status(404).json({ error: 'wishlist Portfolio not found' });
        }

        // Find the stock by ID within the portfolio
        let wishlist = wishPortfolio.wishlists.find(item => item.symbol === symbol);
        if (!wishlist) {
            return res.status(404).json({ error: 'wishlist not found in portfolio' });
        }

        // Update stock fields
        //wishlist.symbol = symbol;
        wishlist.name = name;
        wishlist.shares = shares;
        wishlist.purchasePrice = purchasePrice;

        // Save the portfolio
        await wishPortfolio.save();

        res.status(200).json(wishPortfolio);
    } catch (error) {
        console.error('Error updating stock:', error.message);
        res.status(500).json({ error: error.message });
    }
   }
//    async function deleteWishlistById(req,res)
//    {
//     const { userId, symbol } = req.query;
//     console.log("userid: " +userId);
//     console.log("symbol: " +symbol);
//     try {
//         // Find the portfolio by ID
//         let wishPortfolio = await WishPortfolio.findOne({user:userId});
//         if (!wishPortfolio) {
//             return res.status(404).json({ error: 'wishlist Portfolio not found' });
//         }
//         console.log("wishlistPortfolio: " + wishPortfolio);
//         // Remove the stock from the portfolio by its _id
//        let index = wishPortfolio.wishlists.findIndex(item => item.symbol === symbol);
//        if (!index) {
//            return res.status(404).json({ error: 'wishlist not found in portfolio' });
//        }
//     //    let wishlist = wishPortfolio.wishlists.find(item => item.symbol === symbol);
//     //    if (!wishlist) {
//     //        return res.status(404).json({ error: 'wishlist not found in portfolio' });
//     //    }
//         // Remove the stock from the array
//         wishPortfolio.wishlists.splice(index, 1);
//         // Save the updated portfolio
//         await wishPortfolio.save();

//         res.status(200).json(wishPortfolio);
//     } catch (error) {
//         console.error('Error deleting wishlists from portfolio:', error.message);
//         res.status(500).json({ error: error.message });
//     }
//    }
async function deleteWishlistById(req, res) {
    const { userId, symbol } = req.query;
    console.log("userid: " + userId);
    console.log("symbol: " + symbol);

    try {
        // Find the portfolio by user ID
        let wishPortfolio = await WishPortfolio.findOne({ user: userId });
        if (!wishPortfolio) {
            return res.status(404).json({ error: 'wishlist Portfolio not found' });
        }
        console.log("wishlistPortfolio: " + wishPortfolio);

        // Find the index of the stock in the wishlists array
        let index = wishPortfolio.wishlists.findIndex(item => item.symbol === symbol);
        if (index === -1) {
            return res.status(404).json({ error: 'wishlist not found in portfolio' });
        }

        // Remove the stock from the array
        wishPortfolio.wishlists.splice(index, 1);

        // Save the updated portfolio
        await wishPortfolio.save();

        res.status(200).json(wishPortfolio);
    } catch (error) {
        console.error('Error deleting wishlists from portfolio:', error.message);
        res.status(500).json({ error: error.message });
    }
}


module.exports = { Wishlist, WishPortfolio ,wishlistInsert, getWishlist,updateWishListById,deleteWishlistById};
