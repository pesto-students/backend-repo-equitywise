const authService = require('../services/login');
const bcrypt = require('bcrypt');
const generateToken = require('../utils/jwtUtils');
async function FindUser(req,res){
    //console.log("req from login controller", req.body);
    try{
        const userData = req.body;
        console.log("userdata:", userData);
        const { emailid } = userData;
        console.log("mailid ", emailid);
        const user = await authService.login(emailid);
        if (user) {
            return res.status(200).json({ message: 'User doesnot exists in Server' });
        }
        return res.status(201).json({ message: 'User exists in Server' });
    }

    catch(err){
        console.log("Error in finding the user: ",err);
        res.status(400).json({message:err.message});
    }
}
module.exports = FindUser;