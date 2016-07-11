var express = require('express');
var router = express.Router();
var client = require('./index');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/index', client.addClient);

module.exports = router;
