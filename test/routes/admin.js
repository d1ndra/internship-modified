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


module.exports = router;
