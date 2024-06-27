const {wishlistInsert} = require('../models/wishlist');
async function wishListInsert(req,res) {
  try {
    console.log("req from wishlist insert serice");
    const result =  await wishlistInsert(req,res);
     console.log(result);
    return result;
  } catch (err) {
    console.log("error in inserting the wishlist data: ",err);
  }
}

module.exports =  {wishListInsert};