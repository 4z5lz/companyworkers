// server.js

// set up
var express = require('express')
        , app = express()
        , morgan = require('morgan')
        , bodyParser = require('body-parser');
                
// configuration
app.use(express.static(__dirname + '/www'));                  // set the static files location
app.use(morgan('dev'));                                       // log every request to the console
app.use(bodyParser.urlencoded({'extended': 'true'}));         // parse application/x-www-form-urlencoded
app.use(bodyParser.json());                                   // parse application/json
app.use(bodyParser.json({type: 'application/vnd.api+json'})); // parse application/vnd.api+json as json

// routes
require('./routes.js')(app);

// listen (start app with node server.js)
app.listen(8080);
console.log("App listening on port 8080");