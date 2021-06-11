const mongoose = require('mongoose');
const { Schema } = mongoose;

const infoSchema = new Schema(
	{
		date: {
			type: String,
		},
		wilaya: {
			type: String,
		},
		port: {
			type: String,
		},
		nom: {
			type: String,
		},
		poids: {
			type: String,
		},
		taille: {
			type: String,
		},
	},
	{ timestamps: true }
);
const info = mongoose.model('Info', infoSchema);
module.exports = info;
