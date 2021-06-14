const Prix = require('../../../models/prix');

const addData = async (req, res) => {
	const { arr } = req.body;
	console.log(arr);
	try {
		for (let i = 1; i < arr.length; i++) {
			let element = arr[i];
			let newData = new Prix({
				port: element.port,
				wilaya: element.wilaya,
				Destinastion: element.Destinastion,
				P_Consommation_max: element.P_Consommation_max,
				P_Consommation_min: element.P_Consommation_min,
				P_Consommation_moy: element.P_Consommation_moy,
				P_Debarquement_max: element.P_Debarquement_max,
				P_Debarquement_min: element.P_Debarquement_min,
				P_Debarquement_moy: element.P_Debarquement_moy,
				date: element.date,
				nom: element.nom,
				production: element.production,
			});
			await newData.save();
		}

		res.status(201).json({
			message: 'data created',
			data: newData,
		});
	} catch (error) {
		console.log('Error nigger');
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
