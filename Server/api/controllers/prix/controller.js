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
const getdata = async (req, res) => {
	try {
		const datas = await Prix.find();
		res.status(200).json({
			message: 'Fetched successfully',
			data: datas,
		});
	} catch (error) {
		console.log('Error ');
	}
};
module.exports = {
	addData,
	getdata,
};
