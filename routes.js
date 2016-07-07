// Restful API routes

var Datastore = require('nedb');
var db = new Datastore({filename: __dirname + '/database/workers.json', autoload: true});

module.exports = function (app) {

    // get all workers
    app.get('/api/all', function (req, res) {
        db.find({}, {_id: 1, first_name: 1, last_name: 1, position: 1, img_id: 1}, function (err, docs) {
            res.json(docs);
        });
    });

    // get details of required worker
    app.get('/api/worker/:worker_id', function (req, res) {
        db.find({
            _id: req.params.worker_id
        }, function (err, docs) {
            res.json(docs);
        });
    });

    // load front-end application
    app.get('*', function (req, res) {
        res.sendFile(__dirname + '/www/index.html');
    });

};