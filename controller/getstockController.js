const stockService = require('../services/getSotock')
async function getstock(req,res){
    
   console.log("req from getstock controller", req);
    try{
       
        const result = await stockService.GetStockService(req,res);
        return result;
    }
    catch(err){
        console.log("Error in getting the stock: ",err);
        res.status(400).json({message:err.message});
    }
}
module.exports = getstock;