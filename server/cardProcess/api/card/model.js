function MongoModel(mongoose) {
    this.mongoose = mongoose;
}

module.exports = MongoModel;

MongoModel.prototype.getCardModel= function() {
    var cardSchema = this.mongoose.Schema({
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
    try {
        return this.mongoose.model('card-detail');
    }
    catch(e) {
        return this.mongoose.model('card-detail', cardSchema);
    }
}