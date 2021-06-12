const express = require('express');
const prixController = require('./controller');
//const auth = require('../../../midddleware/auth');
const prixRouter = express.Router();
const prixSchema = require('../../../validators/prix');
const validate = require('../../../validators/validate');

prixRouter.post('/fish', /*validate(prixSchema.postprix), */ prixController.addData);
prixRouter.get('/', prixController.getdata);
//.get('/',prixController.getData);
module.exports = prixRouter;
