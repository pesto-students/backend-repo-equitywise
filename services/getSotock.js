const {getStock} = require('../models/stock');
async function GetStockService(req,res) {
  try {
    console.log("req from get stock serice", req);
    const result =  await getStock(req,res);
     console.log(result);
    return result;
  } catch (err) {
    console.log("error in get service Stock: ",err);
  }
}

module.exports =  {GetStockService};