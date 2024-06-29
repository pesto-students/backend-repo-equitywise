const express = require('express');
const updateStockController = require('../controller/deleteStock');
const router = express.Router();
router.post('/DeleteStockByStockName',updateStockController);
module.exports = router;