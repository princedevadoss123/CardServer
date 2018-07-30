var model = require('../server/mongo-db/index');
model.init();
model.getCardModel('card-detail').insertMany([{
    cardnumber: '100109087654',
    cvv: '321',
    mobile: '8970926496',
    email: 'd.prince1995@gmail.com',
    OTP: {
        pin: '' 
    },
}], function(err, data) {
    if(err) {
        throw err;
    }
});