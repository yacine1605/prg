const { string } = require('joi');
const joi = require('joi');

module.exports = {
	postprix: {
		body: {
			arr: Joi.array().items(
				Joi.object({
					port: Joi.string().required(1),
					date: Joi.string().required(1),
					nom: Joi.string().required(1),
					production: Joi.string().required(1),
					wilaya: Joi.string().required(1),
					P_Consommation_min: Joi.string().required(1),
					P_Consommation_max: Joi.string().required(1),
					P_Consommation_moy: Joi.string().required(1),
					P_Debarquement_max: Joi.string().required(1),
					P_Debarquement_min: Joi.string().required(1),
					P_Debarquement_moy: Joi.string().required(1),
				})
			),
		},
	},
};
