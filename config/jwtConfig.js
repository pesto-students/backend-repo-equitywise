const crypto = require('crypto');
const secretKey = new crypto.randomBytes(32).toString('hex');
console.log(secretKey);
module.exports = secretKey;
