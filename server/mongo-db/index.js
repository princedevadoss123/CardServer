var mongoose = require('mongoose');
var Connection = require('./connect');
var CardSchema = require('./schema');
var CardModel = require('./model');
var mongooseWrapper = {
    init: function(resolve, reject) {
        connection = new Connection(mongoose).init(resolve, reject);
    },
    getCardSchema: function() {
        return new CardSchema(mongoose).getCardSchema();
    },
    getCardModel: function(schemaName) {
        return new CardModel(mongoose).getCardModel(schemaName, this.getCardSchema());
    },
    shutdown: function() {
        mongoose.disconnect();
    },
    getConnection: function() {
        return mongoose.connection;
    }
}

module.exports = mongooseWrapper;