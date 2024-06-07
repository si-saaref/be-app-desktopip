const express = require('express');
const { getAllFilms } = require('./controller');
const router = express.Router();

/* GET home page. */
router.get('/', getAllFilms);

module.exports = router;
