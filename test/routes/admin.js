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

router.get('/search', function(req, res) {
    res.render('adminsearch');
});

router.get('/updateclient', function(req, res) {
    res.render('updateclient');
});

router.get('/editmaster', function(req, res) {
    res.render('master_data');
});

router.post('/addclient', client.addClient);
module.exports = router;