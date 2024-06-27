const wishlistService = require('../services/wishListInsert')
async function wishlistInsert(req,res){
    
   console.log("req from wishlist insert controller");
    try{
       
        const result = await wishlistService.wishListInsert(req,res);
        return result;
    }
    catch(err){
        console.log("Error in inserrting the wishlist: ",err);
        res.status(400).json({message:err.message});
    }
}
module.exports = wishlistInsert;