const { string } = require('joi');
const joi = require('joi');

module.exports = {
	postPort: {
		body: {
			dprh: joi.string().required(),
			port: joi.array().items(joi.string()),
		},
	},
};
