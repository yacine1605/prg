const express = require('express');
const infoController = require('./controller');
const infoRouter = express.Router();

infoRouter.post('/', infoController.addInfo);

module.exports = infoRouter;
