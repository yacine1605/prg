const uniqueValidator = require('mongoose-unique-validator');

const mongoose = require('mongoose');
const { Schema } = mongoose;

const portSchema = new Schema({
	port: [
		{
			type: String,
		},
	],
	dprh: { type: String },
	Startes_Mineurs: { type: String },
});

portSchema.plugin(uniqueValidator);
const port = mongoose.model('Port', portSchema);
module.exports = port;
