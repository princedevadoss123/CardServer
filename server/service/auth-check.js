let Log = require('log');
let logger = new Log();

module.exports = function(request, response, next) {
    if(request.token === undefined) {
        response.sendStatus(401);
    }
    else {
        if(request.token === process.env.CARD_BEARER_TOKEN) {
            logger.info('Got Authorized');
            next();
        }
        else {
            logger.info('Not Authorized');
            response.sendStatus(403);
        }
    }
}