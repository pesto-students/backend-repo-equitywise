const {findOne} = require('../models/user');
async function login(mailid) {
  try {
    //const user = await userModel.findOne({ username :username});
    //const users =await userModel.find({ });
    console.log(mailid);
    const user =  await findOne(mailid);
    if (!user) {
     console.log('User not found');
    }
    // Add password verification logic here
    return user;
  } catch (err) {
    console.log("error in service login",err);
  }
}

module.exports =  {login};