const stockService = require('../services/stock')
async function StockInsert(req,res){
    
   console.log("req from stock insert controller", req);
    try{
       
        const result = await stockService.StockInsert(req,res);
        return result;
    }
    catch(err){
        console.log("Error in inserrting the stock: ",err);
        res.status(400).json({message:err.message});
    }
}
module.exports = StockInsert;