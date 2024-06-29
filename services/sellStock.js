const {sellApiStockById} = require('../models/stock');
async function sellStockService(req,res) {
  try {
    console.log("req from sell stock serice");
    const result =  await sellApiStockById(req,res);
     console.log(result);
    return result;
  } catch (err) {
    console.log("error in sell service Stock: ",err);
  }
}

module.exports =  {sellStockService};