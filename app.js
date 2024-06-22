const express = require('express');
const connectdb = require('./config/dbconfig');
require('dotenv').config({path:"./Config/.env"});
const cors = require('cors');
const app=express();
const corsOptions = {
    origin: 'http://localhost:3000',
    optionsSuccessStatus: 200
  };
  
  app.use(cors(corsOptions));
  
app.use(express.json());
const signuprouter = require('./routes/signup');
const loginrouter = require('./routes/login')
const isUserExistsrouter = require('./routes/isUserExists');
const getstockrouter = require('./routes/getStockRoutes');
const stockrouter = require('./routes/stock');
const updateStockRouter = require('./routes/updateStockRoutes');
const deleteStockRouter = require('./routes/deleteStockRoutes')
app.use(signuprouter);
app.use(loginrouter);
app.use(isUserExistsrouter);
app.use(stockrouter);
app.use(getstockrouter);
app.use(updateStockRouter);
app.use(deleteStockRouter);
const PORT = process.env.port || 5000;
app.listen(PORT, () => {
console.log(`Server is running on port ${PORT}`);
});