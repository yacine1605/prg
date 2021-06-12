const { string } = require('joi');
const joi = require('joi');

module.exports = {
	postprix: {
		body: {
			P_Consommation_max: joi.string().required(),
			P_Consommation_min: joi.string().required(),
			P_Consommation_moy: joi.string().required(),
			P_Debarquement_max: joi.string().required(),
			P_Debarquement_min: joi.string().required(),
			P_Debarquement_moy: joi.string().required(),
			date: joi.string().required(),
			nom: joi.string().required(),
			production: joi.string().required(),
		},
	},
};
