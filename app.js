const express = require('express');
const connectdb = require('./config/dbconfig');
require('dotenv').config({path:"./Config/.env"});
const app=express();
app.use(express.json());
const signuprouter = require('./routes/signup');
const loginrouter = require('./routes/login')
app.use(signuprouter);
app.use(loginrouter);
const PORT = process.env.port || 5000;
app.listen(PORT, () => {
console.log(`Server is running on port ${PORT}`);
});