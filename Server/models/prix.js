const uniqueValidator = require('mongoose-unique-validator');

const mongoose = require('mongoose');
const { Schema } = mongoose;

const prixSchema = new Schema(
	{
		Allache: {
			Production: { type: String },
			prix_debarquement: {
				debarquemeent_min: {
					type: String,
				},
				debarquemeent_moy: {
					type: String,
				},
				debarquemeent_max: {
					type: String,
				},
			},
			prix_consommation: {
				consommation_min: {
					type: String,
				},
				consommation_moy: {
					type: String,
				},
				consommation_max: {
					type: String,
				},
			},
		},

		destination: {
			type: String,
		},
	},
	{ timestamps: true }
);

prixSchema.plugin(uniqueValidator);
const prix = mongoose.model('Prix', prixSchema);
module.exports = prix;
