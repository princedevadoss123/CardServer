var express = require('express');
var checkAuth = require('../../../service/auth-check');
var router = express.Router();
var CardController = require('./controller');
var cardObject = new CardController();
router.get('/cardProcess', checkAuth, cardObject.processCard);

module.exports = router;
