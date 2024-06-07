const { Film } = require('../../db/models');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { passwordChecker, usernameChecker, emailChecker } = require('../../helper/helper');

module.exports = {
	getAllFilms: async (req, res) => {
		try {
			const filmPayload = await Film.findAll();
			res
				.status(200)
				.json({ message: 'Successfully Get All Films Data', status: 200, data: filmPayload });
		} catch (error) {
			res.status(500).json({ message: error.message || 'Internal Message Error', status: 500 });
		}
	},
};
