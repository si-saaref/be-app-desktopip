const express = require('express');
const { getAllFilms, getOneFilm, addFilm } = require('./controller');
const { isLoginUser } = require('../middleware/auth');
const router = express.Router();

/* GET home page. */
router.get('/', getAllFilms);
router.get('/:idFilm', getOneFilm);
router.post('/', isLoginUser, addFilm);

module.exports = router;
