const { string } = require('joi');
const joi = require('joi');

module.exports = {
	postprix: {
		body: {
			port: joi.string().required(1),
			date: joi.string().required(1),
			nom: joi.string().required(1),
			production: joi.string().required(1),
			wilaya: joi.string().required(1),
			P_Consommation_min: joi.string().required(1),
			P_Consommation_max: joi.string().required(1),
			P_Consommation_moy: joi.string().required(1),
			P_Debarquement_max: joi.string().required(1),
			P_Debarquement_min: joi.string().required(1),
			P_Debarquement_moy: joi.string().required(1),
		},
	},
};
