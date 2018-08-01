var express = require('express');
var CardRouter = express.Router();
var card = require('./card');

CardRouter.use('/api', card);

module.exports = CardRouter;