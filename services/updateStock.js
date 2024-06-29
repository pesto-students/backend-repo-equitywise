const {updateStockById} = require('../models/stock');
async function upadteStockService(req,res) {
  try {
    console.log("req from update stock serice", req);
    const result =  await updateStockById(req,res);
     console.log(result);
    return result;
  } catch (err) {
    console.log("error in update service Stock: ",err);
  }
}

module.exports =  {upadteStockService};