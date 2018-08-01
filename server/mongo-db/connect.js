let Log = require('log');
let logger = new Log();
function Connection(mongoose) {
    this.mongoose = mongoose;
}

module.exports = Connection;

Connection.prototype.init = function(resolve, reject) {
    _connect(this.mongoose, resolve, reject);
    this.mongoose.connection.on('error', error => {
        throw error;
    });
    this.mongoose.connection.on('disconnected', () => {
        logger.error('MongoDB Disconnected');
        setTimeout(_connect, 5000);
    });
}

function _connect(mongoose, resolve, reject) {
    const options = {
        useNewUrlParser: true,
        keepAlive: true, 
        connectTimeoutMS: 30000,
        reconnectTries: Number.MAX_VALUE
    };
    
    mongoose.connect('mongodb://localhost:27017/Card', options, function(error) {
        if(error) {
            logger.error('Error in Connecting to MongoDB');
            throw error;
        }
        else {
            mongoose.connection.db.listCollections().toArray(function (err, collectionNames) {
                if (err) {
                  logger.error('Error in retriving collections');
                  return;
                }
                  resolve(collectionNames);
              });
        }
});
}