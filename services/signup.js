const {userModel} = require("../models/user");
const bcrypt = require("bcrypt");

async function register(userData){
    console.log("Hello Signup Services",userData)
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

module.exports = {register};