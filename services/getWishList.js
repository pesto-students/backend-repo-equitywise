const {getWishlist} = require('../models/wishlist');
async function GetWishListService(req,res) {
  try {
    console.log("req from get wishlist serice", req);
    const result =  await getWishlist(req,res);
     console.log(result);
    return result;
  } catch (err) {
    console.log("error in get service wishlist: ",err);
  }
}

module.exports =  {GetWishListService};