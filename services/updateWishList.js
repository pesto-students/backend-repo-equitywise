const {updateWishListById} = require('../models/wishlist');
async function updateWishListService(req,res) {
  try {
    console.log("req from update wishlist service", req);
    const result =  await updateWishListById(req,res);
     console.log(result);
    return result;
  } catch (err) {
    console.log("error in updating wishlist: ",err);
  }
}

module.exports =  {updateWishListService};