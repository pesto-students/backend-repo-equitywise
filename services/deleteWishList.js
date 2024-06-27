const {deleteWishlistById} = require('../models/wishlist');
async function deleteWishService(req,res) {
  try {
    console.log("req from delete wishlist serice");
    const result =  await deleteWishlistById(req,res);
     console.log(result);
    return result;
  } catch (err) {
    console.log("error in deleting service wishlist: ",err);
  }
}

module.exports =  {deleteWishService};