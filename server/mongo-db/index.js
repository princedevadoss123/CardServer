var mongoose = require('mongoose');
var Connection = require('./connect');
var mongooseWrapper = {
    init: function() {
        new Connection(mongoose).init();
    }
}

module.exports = mongooseWrapper;