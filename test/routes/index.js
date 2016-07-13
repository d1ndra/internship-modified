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
        db.collection('clients', {strict:true}, function(err, collection) {
            if (err) {
                console.log("The 'clients' collection doesn't exist. Creating it with sample data...");
                //populateDB();
            }
        });
        db.collection('metadata', {strict:true}, function(err, collection) {
            if (err) {
                console.log("The 'metadata' collection doesn't exist. Creating it with sample data...");
                //populateDB();
            }
        });
    }
});

router.addClient = function(req, res) {
    var client = req.body;
    if(collection.find({name : req.body.name}).toArray(function (err, result) {
          if (err) {
            console.log(err);
          } else if (result.length) {
            return true;
          } else {
            return false;
          }
        })
      )
    {
      res.send('Client already exists!');
      res.render('adminstart');
    }
    else
    {
        console.log('Adding client: ' + JSON.stringify(client));
        db.collection('clients', function(err, collection) {
            collection.insert(client, {safe:true}, function(err, result) {
                if (err) {
                    res.send({'error':'An error has occurred'});
                } else {
                    console.log('Success: ' + JSON.stringify(client));
                    res.render('adminstart');
                }
            });
        });
    }
  }

router.updateClient = function(req, res) {
    var client = req.body;
    console.log('Updating client: ' + req.body.name);
    db.collection('clients', function(err, collection) {
        collection.update({name : req.body.name}, client, {safe:true}, function(err, result) {
            if (err) {
                res.send({'error':'An error has occurred'});
            } else {
                console.log('Success: ' + JSON.stringify(client));
                res.render('adminstart');
            }
        });
    });
}

var collection = db.collection('clients');
router.searchClient = function(req, res) {
   var s = {};
  if (req.body.name !== "")
  {
    var str = req.body.name;
    s['name'] = str;
  }
  if (req.body.Active == "active" || req.body.Active == "inactive")
  {
    var str = req.body.Active;
    s['active'] = str;
  }
  if (req.body.hostingtype == "onpremise" || req.body.hostingtype == "saas")
  {
    var str = req.body.hostingtype;
    s['hostingtype'] = str;
  }
  if (req.body.industry !== "")
  {
    var str = req.body.industry;
    s['industry'] = str;
  }
  if (req.body.geography !== "")
  {
    var str = req.body.geography;
    s['geography'] = str;
  }
  if (req.body.region !== "")
  {
    var str = req.body.region;
    s['region'] = str;
  }
  if (req.body.location !== "")
  {
    var str = req.body.location;
    s['location'] = str;
  }
  if (req.body.edi !== "")
  {
    var str = req.body.edi;
    s['edi'] = str;
  }
  if (req.body.lifecycle == "implementation" || req.body.lifecycle == "migration" || req.body.lifecycle == "product enhancement/support")
  {
    var str = req.body.lifecycle;
    s['lifecycle'] = str;
  }
  if (req.body.fromdate !== "")
  {
    var str = req.body.fromdate;
    s['fromdate'] = str;
  }
  if (req.body.todate !== "")
  {
    var str = req.body.todate;
    s['todate'] = str;
  }
  if (req.body.icn !== "")
  {
    var str = req.body.icn;
    s['icn'] = str;
  }
  console.log(s);
  //var resjson = JSON.parse(s);
  collection.find(s).toArray(function (err, result) {
      if (err) {
        console.log(err);
      } else if (result.length) {
        console.log('Found:', result);
        res.json(result);
      } else {
        console.log('No document(s) found with defined "find" criteria!');
        res.render('failsearch')
      }
  });
};

router.searchClientAdmin = function(req, res) {
   var s = {};
  if (req.body.name !== "")
  {
    var str = req.body.name;
    s['name'] = str;
  }
  if (req.body.Active == "active" || req.body.Active == "inactive")
  {
    var str = req.body.Active;
    s['active'] = str;
  }
  if (req.body.hostingtype == "onpremise" || req.body.hostingtype == "saas")
  {
    var str = req.body.hostingtype;
    s['hostingtype'] = str;
  }
  if (req.body.industry !== "")
  {
    var str = req.body.industry;
    s['industry'] = str;
  }
  if (req.body.geography !== "")
  {
    var str = req.body.geography;
    s['geography'] = str;
  }
  if (req.body.region !== "")
  {
    var str = req.body.region;
    s['region'] = str;
  }
  if (req.body.location !== "")
  {
    var str = req.body.location;
    s['location'] = str;
  }
  if (req.body.edi !== "")
  {
    var str = req.body.edi;
    s['edi'] = str;
  }
  if (req.body.lifecycle == "implementation" || req.body.lifecycle == "migration" || req.body.lifecycle == "product enhancement/support")
  {
    var str = req.body.lifecycle;
    s['lifecycle'] = str;
  }
  if (req.body.fromdate !== "")
  {
    var str = req.body.fromdate;
    s['fromdate'] = str;
  }
  if (req.body.todate !== "")
  {
    var str = req.body.todate;
    s['todate'] = str;
  }
  if (req.body.icn !== "")
  {
    var str = req.body.icn;
    s['icn'] = str;
  }
  console.log(s);
  //var resjson = JSON.parse(s);
  collection.find(s).toArray(function (err, result) {
      if (err) {
        console.log(err);
      } else if (result.length) {
        console.log('Found:', result);
        res.json(result);
      } else {
        console.log('No document(s) found with defined "find" criteria!');
        res.render('failsearchadmin')
      }
  });
};

router.get('/user', function(req, res, next) {
  res.render('user');
});
module.exports = router;


/*var populateDB = function() {

    var clients = [
    {
        name: "Sample",
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

};*/
