const Prix = require('../../../models/prix');

const addData = async (req, res) => {
	const { destination, Allache } = req.body;

	try {
		const newData = new Prix({
			Allache,

			destination,
		});
		await newData.save();
		res.status(201).json({
			message: 'data created',
			data: newData,
		});
	} catch (error) {
		console.log('Error ');
	}
};

module.exports = {
	addData,
};
