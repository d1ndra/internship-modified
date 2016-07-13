var express = require('express');
var router = express.Router();
var client = require('./index');


router.get('/', function(req, res, next) {
  res.render('user');
});

module.exports = router;
