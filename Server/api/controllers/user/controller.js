const User = require('../../../models/user');
const jwt = require('jsonwebtoken');
const bcrybt = require('bcrypt');

const signupUser = async (req, res) => {
	const { dprh, port, nom, prenom, username, email, password } = req.body;
	try {
		const user = await User.findOne({ email } && { username } && { port });

		if (user) {
			return res.status(400).json({
				message: 'user existe',
			});
		}
		const newPassword = await bcrybt.hash(password, 10);
		const newUser = new User({
			dprh,
			port,
			nom,
			prenom,
			username,
			email,
			password: newPassword,
		});
		await newUser.save();
		res.status(201).json({
			message: 'user created',
			data: newUser,
		});
	} catch (error) {
		console.log('Error ');
	}
};
const loginUser = async (req, res) => {
	const { username, password } = req.body;
	try {
		const user = await User.findOne({ username });
		if (!user) {
			return res.status(400).json({
				message: 'user not found',
			});
		}
		const compare = await bcrybt.compare(password, user.password);
		if (compare === false) {
			return res.status(400).json({
				message: 'wrong credta',
			});
		}
		const token = jwt.sign({ username: user.username }, process.env.PRIVATE_KEY);
		if (!token) {
			return res.status(500).json({
				message: 'server error',
			});
		}
		return res.status(200).json({
			message: 'login succes',
			data: {
				access_token: token,
			},
		});
	} catch (error) {
		console.log('error loginUser =>', error);
		res.status(500).json({
			message: 'sever error ',
		});
	}
};
const getInfoUser = async (req, res) => {
	try {
		const data = req.data;
		const user = await User.findOne({ username: data.username }, '-_id -password');
		if (!user) {
			return res.status(400).json({
				message: 'non found',
			});
		}
		res.status(200).json({
			message: 'fetched ',
			data: {
				dprh: user.dprh,
				port: user.port,
				nom: user.nom,
				prenom: user.prenom,
				username: user.username,
				email: user.email,
			},
		});
	} catch (error) {
		console.log('error ');
	}
};

module.exports = {
	signupUser,
	loginUser,
	getInfoUser,
};
