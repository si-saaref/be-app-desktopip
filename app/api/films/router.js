const express = require('express');
const { getAllFilms, getOneFilm, addFilm, updateFilm, deleteFilm } = require('./controller');
const { isLoginUser } = require('../middleware/auth');
const router = express.Router();

/* GET home page. */
router.get('/', getAllFilms);
router.get('/:idFilm', getOneFilm);
router.post('/', isLoginUser, addFilm);
router.put('/:idFilm', isLoginUser, updateFilm);
router.delete('/:idFilm', isLoginUser, deleteFilm);

module.exports = router;
