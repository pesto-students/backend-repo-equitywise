const express = require('express');
const wishListController = require('../controller/getWishlistController');
const router = express.Router();
router.post('/getWishList',wishListController);
module.exports = router;