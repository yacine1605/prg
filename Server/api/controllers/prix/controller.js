const e = require('express');
const Prix = require('../../../models/prix');

const addData = async (req, res) => {
	const { arr } = req.body;
	for (let i = 1; i < arr.length; i++) {
		const newData = arr[i];
		console.log(newData);
	}
	try {
		const newData = new Prix({
			Destinastion,
			P_Consommation_max,
			P_Consommation_min,
			P_Consommation_moy,
			P_Debarquement_max,
			P_Debarquement_min,
			P_Debarquement_moy,
			date,
			nom,
			production,
		});
		await newData.save();
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
