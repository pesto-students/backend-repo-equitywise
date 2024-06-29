const stockService = require('../services/deleteStock')
async function deletestock(req,res){
    
   console.log("req from delete stock controller", req);
    try{
       
        const result = await stockService.deleteStockService(req,res);
        return result;
    }
    catch(err){
        console.log("Error in deleting the stock: ",err);
        res.status(400).json({message:err.message});
    }
}
module.exports = deletestock;