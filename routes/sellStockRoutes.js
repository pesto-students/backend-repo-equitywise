const express = require('express');
const sellStockController = require('../controller/sellStockController');
const router = express.Router();
router.post('/SellStockByUserid',sellStockController);
module.exports = router;