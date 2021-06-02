const { string } = require('joi');
const joi = require('joi');

module.exports = {
	Login: {
		body: {
			username: joi.string().required(),
			password: joi.string().min(8).required(),
		},
	},
};
