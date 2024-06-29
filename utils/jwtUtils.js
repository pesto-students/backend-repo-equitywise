const jwt = require('jsonwebtoken');
const secretKey = require('../config/jwtConfig');
function generatetoken(user){
   return jwt.sign({username:user.username},secretKey,{expiresIn:'1h'})
}
module.exports = generatetoken;