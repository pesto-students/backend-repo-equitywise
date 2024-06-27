const express = require('express');
const connectdb = require('./config/dbconfig');
require('dotenv').config({path:"./Config/.env"});
const cors = require('cors');
const app=express();

const corsOptions = {
  origin: 'http://localhost:3000',
  optionsSuccessStatus: 200
};

// Middleware to set COOP and CORP headers
app.use((req, res, next) => {
  res.header('Cross-Origin-Opener-Policy', 'same-origin-allow-popups');
  res.header('Cross-Origin-Resource-Policy', 'same-origin');
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
  next();
});

app.use(cors(corsOptions));
  
app.use(express.json());
const signuprouter = require('./routes/signup');
const loginrouter = require('./routes/login')
const isUserExistsrouter = require('./routes/isUserExists');
const getstockrouter = require('./routes/getStockRoutes');
const stockrouter = require('./routes/stock');
const updateStockRouter = require('./routes/updateStockRoutes');
const deleteStockRouter = require('./routes/deleteStockRoutes')
const getWishlisRrouter = require('./routes/getWishListRoutes');
const insertWishlistRouter = require('./routes/insertWishlistRoutes');
const updateWishlistRouter = require('./routes/updateWishlistRoutes');
const deleteWishlistRouter = require('./routes/deleteWishlistRoutes')
app.use(signuprouter);
app.use(loginrouter);
app.use(isUserExistsrouter);
app.use(stockrouter);
app.use(getstockrouter);
app.use(updateStockRouter);
app.use(deleteStockRouter);
app.use(getWishlisRrouter);
app.use(insertWishlistRouter);
app.use(updateWishlistRouter);
app.use(deleteWishlistRouter);

const PORT = process.env.port || 5000;
app.listen(PORT, () => {
console.log(`Server is running on port ${PORT}`);
});