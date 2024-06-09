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
	addFilm: async (req, res) => {
		try {
			const { title, description, image_thumbnail } = req.body;

			if (!title) {
				res.status(406).json({ message: 'Title should not be empty', status: 406 });
				return;
			}
			if (!description) {
				res.status(406).json({ message: 'Description should not be empty', status: 406 });
				return;
			}
			if (!image_thumbnail) {
				res.status(406).json({ message: 'Image should not be empty', status: 406 });
				return;
			}

			const filmPayload = await Film.create({
				title,
				description,
				image_thumbnail,
			});
			if (!filmPayload) {
				res.status(400).json({
					message: "Couldn't add film. Please contact the administrator",
					status: 400,
				});
				return;
			}
			res.status(200).json({ message: 'Successfully Added Film', status: 200, data: filmPayload });
		} catch (error) {
			res.status(500).json({ message: error.message || 'Internal Message Error', status: 500 });
		}
	},
};
