const express = require('express');
const bodyParser = require('body-parser');
const Server = require('./server-module/server');
var dbWrapper = require('./mongo-db/index');
const app = express();
let Log = require('log');
let logger = new Log();
var cardProcess = require('./cardProcess/api');
const executor = require('../bin/insertValue');

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
        
        //DB Connnection Initialization
        new Promise(function(resolve, reject){
            dbWrapper.init(resolve, reject);
        })
        .then(function(cards) {
            if(!(cards.length > 0)) { 
                //Init Script
                executor();
            }
        });

        //Details of request
        app.use(function(req, res, next) {
            logger.info('Type: %s', req.method);
            next();
        }, function(req, res, next) {
            logger.info('Path: %s', req.path);
            next();
        });

        app.use('/app', cardProcess);

        new Server(3002, app).createServer();
}