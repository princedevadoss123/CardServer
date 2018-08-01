let Card = require('../server/cardProcess/api/card/model');
let mongoose = require('mongoose');
let Log = require('log');
let logger = new Log();
var fs = require('fs');

function initScript() {
    var contentInfo = JSON.parse(fs.readFileSync('bin/consumption/cardDetails.json', 'utf8'));
    var cardModel = new Card(mongoose).getCardModel();
    logger.info(contentInfo);
    cardModel.insertMany(contentInfo, function(err, data) {
        if(err) {
            logger.error('Initial Insertion failed');
            throw err;
        }
        else {
            logger.info('Successfully updated');
        }
    });
}

module.exports = initScript;