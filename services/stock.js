const {stockInsert} = require('../models/stock');
async function StockInsert(req,res) {
  try {
    console.log("req from stock insert serice", req);
    const result =  await stockInsert(req,res);
     console.log(result);
    return result;
  } catch (err) {
    console.log("error in service Stock Insert: ",err);
  }
}

module.exports =  {StockInsert};