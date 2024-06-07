const { User } = require('../../db/models');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { passwordChecker, usernameChecker, emailChecker } = require('../../helper/helper');

module.exports = {
	register: async (req, res) => {
		try {
			const { username, email, password } = req.body;
			try {
				await usernameChecker(username?.trim());
				emailChecker(email?.trim());
				passwordChecker(password?.trim());
			} catch (error) {
				res.status(406).json({ message: error.message, status: 406 });
				return;
			}

			try {
				if (passwordChecker(password)) {
					const userPayload = await User.create({
						email,
						username,
						password: bcrypt.hashSync(password, 10),
					});

					if (!userPayload) {
						res
							.status(400)
							.json({ message: 'Cannot create users due to server failure', status: 400 });
					}

					delete userPayload.dataValues.password;
					res
						.status(200)
						.json({ message: 'Register successfully', status: 200, data: userPayload });
				}
			} catch (error) {
				res.status(400).json({ message: error.message, status: 400 });
			}
		} catch (error) {
			res.status(500).json({ message: error.message || 'Internal Message Error', status: 500 });
		}
	},
};
