const express = require('express');
const { getAllFilms, getOneFilm } = require('./controller');
const router = express.Router();

/* GET home page. */
router.get('/', getAllFilms);
router.get('/:idFilm', getOneFilm);

module.exports = router;
