const mongoose = require('mongoose');
const bcrypt = require("bcrypt");
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
async function insert(userData){
    try{
        const { emailid,password } = userData;
 const hashedPassword = await bcrypt.hash(password, 10);
 const newUser = new userModel({ 
    mailid: emailid,
    password: hashedPassword 
    });
 const savedUser = await newUser.save();
 console.log("saved user", savedUser);
 return savedUser;
    }
    catch(error)
    {
        console.log("error message from user", error.message);
    }
}
module.exports = {userModel, findOne,insert}