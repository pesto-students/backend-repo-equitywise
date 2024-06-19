const express = require('express');
const StockController = require('../controller/stock');
const router = express.Router();
router.post('/stockInsert',StockController);
module.exports = router;