var express = require('express');
var router = express.Router();
var CardController = require('./controller');
var cardObject = new CardController();
router.get('/cardProcess', cardObject.processCard);

module.exports = router;
