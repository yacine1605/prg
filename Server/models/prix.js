const uniqueValidator = require('mongoose-unique-validator');

const mongoose = require('mongoose');
const { Schema } = mongoose;

const prixSchema = new Schema(
	{
		Destinastion: { type: String },
		P_Consommation_max: { type: String },
		P_Consommation_min: { type: String },
		P_Consommation_moy: { type: String },
		P_Debarquement_max: { type: String },
		P_Debarquement_min: { type: String },
		P_Debarquement_moy: { type: String },
		date: { type: String },
		nom: { type: String },
		production: { type: String },
	},

	{ timestamps: true }
);

prixSchema.plugin(uniqueValidator);
const prix = mongoose.model('Prix', prixSchema);
module.exports = prix;
