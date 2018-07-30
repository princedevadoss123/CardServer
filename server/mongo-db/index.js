var mongoose = require('mongoose');
var Connection = require('./connect');
var CardSchema = require('./schema');
var CardModel = require('./model');
var mongooseWrapper = {
    init: function() {
        new Connection(mongoose).init();
    },
    getCardSchema: function() {
        return new CardSchema(mongoose).getCardSchema();
    },
    getCardModel: function(schemaName) {
        return new CardModel(mongoose).getCardModel(schemaName, this.getCardSchema());
    }
}

module.exports = mongooseWrapper;