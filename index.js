/**
*  This is a sample webhook server that listens for webhook
*  callbacks coming from Trello
*
*  Note that this sample does not authenticate incoming signatures,
*  which Trello DOES support.
*/

var express  = require('express'),
    request  = require('request'),
    app      = express(),
    bodyParser = require('body-parser'),
    port = process.env.PORT || 3000,
    env = process.env.NODE_ENV || 'development',
    key = process.env.TRELLO_KEY,
    token = process.env.TRELLO_TOKEN;

const db = require('./DB.js');
const router = require('./routes');

var lastReq;

// Allows us to easily read the payload from the webhook
app.use( bodyParser.json() );
app.use('/', router);

app.get("/lastReq", function(req, res, next) {
  res.status(200).json(lastReq);
});

// Standard NodeJS Listener
var server = app.listen(port, function () {
	var host = server.address().address;
	var port = server.address().port;

	console.log('Listening at http://%s:%s in %s', host, port, env);
});
