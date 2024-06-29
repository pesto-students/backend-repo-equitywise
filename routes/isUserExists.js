const express = require('express');
const isUserExistsController = require('../controller/isUserExists');
const router = express.Router();
router.post('/FindUser',isUserExistsController)
module.exports = router;