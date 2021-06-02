const Port = require('../../../models/port');

const addPort = async (req, res) => {
	const { dprh, port } = req.body;
	try {
		const portadded = await Port.findOne({ port: { $in: port } });
		if (portadded) {
			return res.status(400).json({
				message: 'port already exists',
			});
		}
		const newPort = new Port({
			Startes_Majeurs: 'Algerie',
			dprh,
			port,
		});
		await newPort.save();
		res.status(200).json({
			message: 'port added',
			data: newPort,
		});
	} catch (error) {
		console.log('Error signupUser =>', error);
		res.status(500).json({
			message: 'Server error',
		});
	}
};

module.exports = {
	addPort,
};
