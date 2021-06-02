const Info = require('../../../models/fish');

const addInfo = async (req, res) => {
	const { wilaya, port, nom, Poids, taille } = req.body;

	try {
		const newInfo = new Info({
			wilaya,
			port,
			nom,
			Poids,
			taille,
		});
		await newInfo.save();
		res.status(201).json({
			message: 'data created',
			data: newInfo,
		});
	} catch (error) {
		console.log('Error ');
	}
};

module.exports = {
	addInfo,
};
