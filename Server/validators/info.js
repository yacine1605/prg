const { string } = require('joi');
const joi = require('joi');

module.exports = {
	postinfo: {
		body: {
			wilaya: joi.string().required(),
			port: joi.required(),
			nom: joi.string().required(),
			poids: joi.string().required(),
			taille: joi.string().required(),
		},
	},
};
