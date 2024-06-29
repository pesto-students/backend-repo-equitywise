const wishListService = require('../services/updateWishList')
async function updateWishList(req,res){
    
   console.log("req from update wishlist controller", req);
    try{
       
        const result = await wishListService.updateWishListService(req,res);
        return result;
    }
    catch(err){
        console.log("Error in updating the wishlist: ",err);
        res.status(400).json({message:err.message});
    }
}
module.exports = updateWishList;