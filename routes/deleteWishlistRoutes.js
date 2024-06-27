const express = require('express');
const wishlistController = require('../controller/deleteWishListController');
const router = express.Router();
router.post('/DeleteWishListByStockName',wishlistController);
module.exports = router;