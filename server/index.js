const express = require('express');
const bodyParser = require('body-parser');
const Server = require('./server-module/server');
const app = express();
let Log = require('log');
let logger = new Log();

function ServerWare() { }

module.exports = ServerWare;

ServerWare.prototype.init = function() {
        // Parsers
        app.use(bodyParser.json());
        app.use(bodyParser.urlencoded({ extended: true}));

        //Status monitor
        app.use(require('express-status-monitor')());

        // Angular DIST output folder
        app.use(express.static('./dist'));

        //Details of request
        app.use(function(req, res, next) {
            logger.info('Type: %s', req.method);
            next();
        }, function(req, res, next) {
            logger.info('Path: %s', req.path);
            next();
        });

        //Sample route
        app.get('/hello', function(request,response){ 
            response.send('docs');
        });

        new Server(3001, app).createServer();
}