"use strict";

var MongoClient = require('mongodb').MongoClient;

var url = "mongodb://localhost:27017/";
MongoClient.connect(url, function (err, db) {
  if (err) throw err;
  var dbo = db.db("tutorial_node");
  var myquery = {
    id: '84'
  };
  dbo.collection("log_user").deleteOne(myquery, function (err, obj) {
    if (err) throw err;
    console.log("1 document deleted");
    db.close();
  });
});