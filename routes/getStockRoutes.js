const express = require('express');
const GetStockController = require('../controller/getstockController');
const router = express.Router();
router.post('/GetPortfolio',GetStockController);
module.exports = router;