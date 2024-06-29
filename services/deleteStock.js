const {deletestocksById} = require('../models/stock');
async function deleteStockService(req,res) {
  try {
    console.log("req from delete stock serice", req);
    const result =  await deletestocksById(req,res);
     console.log(result);
    return result;
  } catch (err) {
    console.log("error in deleting service Stock: ",err);
  }
}

module.exports =  {deleteStockService};