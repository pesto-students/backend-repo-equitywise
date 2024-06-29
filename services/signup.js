const {insert} = require("../models/user");
const bcrypt = require("bcrypt");

async function register(userData){
    console.log("Hello Signup Services",userData)
    try{
        const user = await insert(userData)
    }
    catch(error){
        console.log("error while inserting the data");
    }
}   

module.exports = {register};