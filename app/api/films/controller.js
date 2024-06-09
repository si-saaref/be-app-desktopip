const { Film } = require('../../db/models');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

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
	getOneFilm: async (req, res) => {
		try {
			const { idFilm } = req.params;
			const filmPayload = await Film.findOne({
				where: {
					id: idFilm,
				},
			});
			if (!filmPayload) {
				res.status(404).json({
					message: 'Film you are looking for is not exist. Please try another one.',
					status: 404,
					data: {},
				});
				return;
			}
			res
				.status(200)
				.json({ message: 'Successfully Get All Films Data', status: 200, data: filmPayload });
		} catch (error) {
			res.status(500).json({ message: error.message || 'Internal Message Error', status: 500 });
		}
	},
};
