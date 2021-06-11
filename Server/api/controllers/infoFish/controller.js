const Info = require('../../../models/fish');

const addInfo = async (req, res) => {
	const { date, wilaya, port, nom, poids, taille } = req.body;

	try {
		const newInfo = new Info({
			date,
			wilaya,
			port,
			nom,
			poids,
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
