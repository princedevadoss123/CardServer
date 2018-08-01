var mongoose = require('mongoose');
var Card = require('./model');
function CardRequestController() { }

module.exports = CardRequestController;

CardRequestController.prototype.processCard = function(request, response) {
    this.card = new Card(mongoose);
    this.cardModel = card.getCardModel();
    cardModel.findOne({cardnumber: '100109087654'})
        .then(function(card) {
            if(!card) {
                response.send({error: 'Error'});
            }
            else {
                response.send(card);
            }
        });
}