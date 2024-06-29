const express = require('express');
const updateStockController = require('../controller/updateStockController');
const router = express.Router();
router.post('/UpdateStockByUserid',updateStockController);
module.exports = router;