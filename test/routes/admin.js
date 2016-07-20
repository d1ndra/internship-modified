var express = require('express');
var router = express.Router();
var client = require('./index');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('adminstart');
});

router.get('/createclient', function(req, res) {
    res.render('createclient');
});

router.post('/addclient', client.addClient);

router.get('/search', function(req, res) {
    res.render('adminsearch');
});

router.post('/searchclient', client.searchClient);
router.post('/searchclientadmin', client.searchClientAdmin);

router.get('/updateclient', function(req, res) {
    res.render('updateclient');
});

router.post('/updateclient',client.updateClient);

router.get('/editmaster', function(req, res) {
    res.render('master_data');
});

var mongo = require('mongodb');
var Server = mongo.Server,
    Db = mongo.Db,
    BSON = mongo.BSONPure;
var server = new Server('localhost', 27017, {auto_reconnect: true});
db = new Db('clientdb', server);
var collection = db.collection('clients');
router.get('/getclients', function(req, res) {
	//router.getclients = function(req,res) {
  collection.find({}).toArray(function (err, result) {
      if (err) {
        console.log(err);
      } else if (result.length) {
        //console.log('Found:', result);
        res.json(result.name);
      } else {
        console.log('No document(s) found with defined "find" criteria!');
        //res.render('failsearchadmin')
      }
  });
});

module.exports = router;
