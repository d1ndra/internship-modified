var mongoose = require('mongoose');

var PostSchema = new mongoose.Schema({
  name: String,
  active: {String, possibleValues: ['active','inactive']},
  hostingtype: {String, possibleValues: ['onpremise','saas']},
  industry: {String, possibleValues: ['Test1','Test2']},
  backend: {String, possibleValues: ['Test3','Test4']},
  geography: {String, possibleValues: ['Test5','Test6',]},
  region: {String, possibleValues: ['Test7','Test8']},
  edi: {String, possibleValues: ['Test9','Test10']},
  location: String,
  solution: String,
  rtc: String,
  lifecyle: {String, possibleValues: ['implementation','migration','product enhancement/support']},
  fromdate: Date,
  todate: Date,
  thirdparty: {String, possibleValues: ['Test14','Test15']},
  icn: String
 // title: String,
 // link: String,
 // upvotes: {type: Number, default: 0},
 // comments: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Comment' }]
});

mongoose.model('Post', PostSchema);