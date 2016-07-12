var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

var mongoose = require('mongoose');

var mongo = require('mongodb');

var Server = mongo.Server,
    Db = mongo.Db,
    BSON = mongo.BSONPure;

var server = new Server('localhost', 27017, {auto_reconnect: true});
db = new Db('clientdb', server);

db.open(function(err, db) {
    if(!err) {
        console.log("Connected to 'clientdb' database");
        db.collection('index', {strict:true}, function(err, collection) {
            if (err) {
                console.log("The 'clients' collection doesn't exist. Creating it with sample data...");
                populateDB();
            }
        });
    }
});

var clientdb = mongoose.model('Post');
// var active = mongoose.model('active');
// var hostingtype=mongoose.model('hostingtype');
// var industry=mongoose.model('industry');
// var backend=mongoose.model('backend');
// var geography=mongoose.model('geography');
// var region=mongoose.model('region');
// var edi=mongoose.model('edi');
// var location=mongoose.model('location');
// var solution=mongoose.model('solution');
// var rtc=mongoose.model('rtc');
// var lifecyle=mongoose.model('lifecyle');
// var fromdate=mongoose.model('from');
// var todate=mongoose.model('todate');
// var thirdparty=mongoose.model('thirdparty');
// var icn=mongoose.model('icn');

router.addClient = function(req, res) {
    var client = req.body;
    console.log('Adding client: ' + JSON.stringify(client));
    db.collection('clients', function(err, collection) {
        collection.insert(client, {safe:true}, function(err, result) {
            if (err) {
                res.send({'error':'An error has occurred'});
            } else {
                console.log('Success: ' + JSON.stringify(client));
                res.redirect('/admin');
            }
        });
    });
}



/*router.post('/posts', function(req, res, next) {
  var name = new name(req.body);

  name.save(function(err, name){
    if(err){ return next(err); }

    res.json(name);
  });
});

router.get('/posts', function(req, res, next) {
  Post.find(function(err, posts){
    if(err){ return next(err); }

    res.json(posts);
  });
});


*/
router.get('/user', function(req, res, next) {
  res.render('user');
});

router.get('/user', function(req, res, next) {
  res.render('user');
});


module.exports = router;


var populateDB = function() {

    var clients = [
    {
        name: "CHATEAU DE SAINT COSME",
        active : "active",
        hostingtype:"hostingtype",
        industry:"industry",
        backend:"backend",
        geography:"geography",
        region:"region",
        edi:"edi",
        location:"location",
        solution:"solution",
        rtc:"rtc",
        lifecyle:"lifecyle",
        fromdate:"from",
        todate:"todate",
        thirdparty:"thirdparty",
        icn:"icn"
    }];

    db.collection('clients', function(err, collection) {
        collection.insert(clients, {safe:true}, function(err, result) {});
    });

};