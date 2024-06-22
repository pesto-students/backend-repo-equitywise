const stockService = require('../services/updateStock')
async function updatestock(req,res){
    
   console.log("req from update stock controller", req);
    try{
       
        const result = await stockService.upadteStockService(req,res);
        return result;
    }
    catch(err){
        console.log("Error in updating the stock: ",err);
        res.status(400).json({message:err.message});
    }
}
module.exports = updatestock;