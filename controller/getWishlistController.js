const WishlistService = require('../services/getWishList')
async function getWishList(req,res){
    
   console.log("req from stock wishlist controller");
    try{
       
        const result = await WishlistService.GetWishListService(req,res);
        return result;
    }
    catch(err){
        console.log("Error in inserting the wishlist: ",err);
        res.status(400).json({message:err.message});
    }
}
module.exports = getWishList;