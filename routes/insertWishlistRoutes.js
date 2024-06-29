const express = require('express');
const WishListController = require('../controller/wishlistInsertController');
const router = express.Router();
router.post('/WishlistInsert',WishListController);
module.exports = router;