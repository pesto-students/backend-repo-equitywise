const userService = require('../services/signup')
async function signup(req,res){
    
   // console.log("req from signup controller", req);
    try{
       
        const userData = req.body;
        const user = await userService.register(userData);
        res.status(201).json({user:user, message:"user Rigistered successfully."})
    }
    catch(err){
        console.log("Error in Registering the user: ",err);
        res.status(400).json({message:err.message});
    }
}
module.exports = signup;