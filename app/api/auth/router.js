const express = require('express');
const { register, login } = require('./controller');
const router = express.Router();

/* GET home page. */
router.post('/register', register);

module.exports = router;
