const wishlistService = require('../services/deleteWishList')
async function deleteWishlistById(req,res){
    
   console.log("req from delete wishlist controller");
    try{
       
        const result = await wishlistService.deleteWishService(req,res);
        return result;
    }
    catch(err){
        console.log("Error in deleting the wishlist: ",err);
        res.status(400).json({message:err.message});
    }
}
module.exports = deleteWishlistById;