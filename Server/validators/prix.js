const { string } = require('joi');
const joi = require('joi');

module.exports = {
	postprix: {
		body: {
			nom: joi.string().required(),
			prenom: joi.string().required(),
			username: joi.string().required(),
			email: joi.string().email().required(),
			post: joi.string.required(),
			phone: joi.string().required(),
		},
	},
};
