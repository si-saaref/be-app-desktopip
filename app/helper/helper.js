const { User } = require('../db/models');

const passwordChecker = (password) => {
	if (password.length < 6) {
		throw new Error('Password is invalid. Password should contain at least 6 characters');
	}

	if (!/[a-z]/g.test(password)) {
		throw new Error('Password is invalid. Password should contain lowercase letter');
	}

	if (!/[A-Z]/g.test(password)) {
		throw new Error('Password is invalid. Password should contain capitalize letter');
	}

	if (!/[0-9]/g.test(password)) {
		throw new Error('Password is invalid. Password should contain numbers');
	}

	return true;
};

const usernameChecker = async (username) => {
	if (!username) {
		throw new Error('Username should not be empty. Plase fill it correctly');
	}

	const checkUser = await User.findOne({
		where: { username },
	});

	if (checkUser) {
		throw new Error('Username is already exist. Please try another one');
	}

	return true;
};

const emailChecker = (email) => {
	if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/g.test(email)) {
		throw new Error('Email is invalid. Plase check again your email');
	}
	return true;
};

module.exports = {
	passwordChecker,
	usernameChecker,
	emailChecker,
};
