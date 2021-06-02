const { string } = require('joi');
const joi = require('joi');

module.exports = {
	postUser: {
		body: {
			nom: joi.string().required(),
			prenom: joi.string().required(),
			username: joi.string().required(),
			email: joi.string().email().required(),
		},
	},
};
