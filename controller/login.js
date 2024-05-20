const authService = require('../services/login');
const bcrypt = require('bcrypt');
const generateToken = require('../utils/jwtUtils');
async function login(req,res){
    //console.log("req from login controller", req.body);
    try{
        const userData = req.body;
        const { mailid, password } = userData;
        const user = await authService.login(mailid);
        console.log("existing user details:" ,user);
        if (!user) {
            return res.status(401).json({ error: 'Authentication failed' });
        }
        const passwordMatch = await bcrypt.compare(password, user.password);
        if (!passwordMatch) {
            return res.status(401).json({ error: 'Authentication failed' });
        }
        const token = generateToken(user);
        res.status(200).json({ token:token });
        
    }
    catch(err){
        console.log("Error in logging the user: ",err);
        res.status(400).json({message:err.message});
    }
}
module.exports = login;