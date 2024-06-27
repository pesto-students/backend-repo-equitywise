const express = require('express');
const updateWishlistController = require('../controller/updateWishlistController');
const router = express.Router();
router.post('/UpdateWishlistByUserid',updateWishlistController);
module.exports = router;