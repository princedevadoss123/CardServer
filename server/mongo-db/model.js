function MongoModel(mongoose) {
    this.mongoose = mongoose;
}

module.exports = MongoModel;

MongoModel.prototype.getCardModel = function(schemaName, schema) {
    return this.mongoose.model(schemaName, schema);
}