const express = require('express');
const prixController = require('./controller');
const prixRouter = express.Router();
const validate = require('../../../validators/validate');
const prixSchema = require('../../../validators/prix');

prixRouter.post('/fish', validate(prixSchema.postprix), prixController.addData);
prixRouter.get('/', prixController.getdata);
module.exports = prixRouter;
