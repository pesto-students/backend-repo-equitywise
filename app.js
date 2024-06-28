const express = require('express');
const connectdb = require('./config/dbconfig');
require('dotenv').config({path:"./Config/.env"});
const cors = require('cors');
const app=express();
const allowedOrigins = ['http://localhost:3000', 'https://equitywise.netlify.app'];

app.use((req, res, next) => {
    const origin = req.headers.origin;
    if (allowedOrigins.includes(origin)) {
        res.setHeader('Access-Control-Allow-Origin', origin);
    }
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Credentials', 'true');
    // Handle preflight requests
    if (req.method === 'OPTIONS') {
        res.status(204).end();
    } else {
        next();
    }
});
// const corsOptions = {
//     origin: 'http://localhost:3000',
//     optionsSuccessStatus: 200
//   };
  
//   app.use(cors(corsOptions));
  
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