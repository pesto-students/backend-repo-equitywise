const stockService = require('../services/sellStock')
async function sellStock(req,res){
    
   console.log("req from sell stock controller");
    try{
       
        const result = await stockService.sellStockService(req,res);
        return result;
    }
    catch(err){
        console.log("Error in sell the stock: ",err);
        res.status(400).json({message:err.message});
    }
}
module.exports = sellStock;