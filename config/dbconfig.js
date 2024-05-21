const mongoose = require('mongoose');
require('dotenv').config({path:"./Config/.env"});
const url = process.env.MONGO_DB_URI;
const dbName = process.env.db_Name;
console.log(`port number is ${process.env.port}`);
const connectdb = async()=>
    {
    const con = await mongoose.connect(url,{
        dbName: dbName,
        serverSelectionTimeoutMS: 50000
    });
    //console.log(`Mongo db connected ${con.connection.host}`)
    }
connectdb();

module.exports = connectdb;
