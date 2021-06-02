const uniqueValidator = require('mongoose-unique-validator');

const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema(
	{
		dprh: { type: String },
		port: {
			type: String,
			unique: true,
		},
		nom: { type: String },
		prenom: { type: String },
		username: {
			type: String,
			unique: true,
		},
		email: {
			type: String,
			unique: true,
		},
		password: {
			type: String,
		},
	},
	{ timestamps: true }
);

userSchema.plugin(uniqueValidator);
const user = mongoose.model('User', userSchema);

module.exports = user;
