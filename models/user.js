const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
    mailid : {type: String, require:true},
    password: { type: String, required: true }
    });
const userModel = mongoose.model('User', userSchema);

async function findOne(email){
    try{
    const extuser = await userModel.findOne({mailid: email});
    return extuser;   
    }
    catch(error)
    {
        console.log("error message from user", error.message);
    }
}
module.exports = {userModel, findOne}