function MongoSchema(mongoose) {
    this.mongoose = mongoose;
}

module.exports = MongoSchema;

MongoSchema.prototype.getCardSchema= function() {
    return this.mongoose.Schema({
        cardnumber: String,
        cvv: String,
        mobile: String,
        email: String,
        OTP: {
            pin: String
        }
    },
    {
        timestamps: true
    });
}