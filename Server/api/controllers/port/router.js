const express = require('express');
const portController = require('./controller');
const portRouter = express.Router();
const validate = require('../../../validators/validate');
const portSchema = require('../../../validators/port');

portRouter.post('/', validate(portSchema.postPort), portController.addPort);
//.get('/:id', portontroller.getPort)
module.exports = portRouter;
