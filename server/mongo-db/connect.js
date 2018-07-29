let Log = require('log');
let logger = new Log();
function Connection(mongoose) {
    this.mongoose = mongoose;
}

module.exports = Connection;

Connection.prototype.init = function() {
    this.mongoose.connect('mongodb://localhost/Card', function(error) {
        if(error) {
            throw error;
        }
        else {
            logger.info('Mongo DB Successfully connected');
            return this.mongoose;
        }
    });
}