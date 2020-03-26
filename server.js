var express = require('express');
var app = express();
var cors = require('cors');
var bodyParser = require('body-parser');
var session = require('express-session');
var path = require('path');
var MongoClient = require('mongodb').MongoClient;
var ObjectId = require('mongodb').ObjectID;
var db;

MongoClient.connect("mongodb://localhost:27017/PolySafe", { useNewUrlParser: true }, function(err, database) {
  if(err) return console.error(err);
  db = database.db('PolySafe');
  // the Mongo driver recommends starting the server here because most apps *should* fail to start if they have no DB.  If yours is the exception, move the server startup elsewhere. 
});

// app.use(express.static(__dirname + '/dist'));
app.use(bodyParser.json());
app.use(cors());
app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false }
}))

//app.get('*', function (req, res) {
//   console.log('I received a GET request');
//   res.sendFile(path.join(__dirname, './dist/index.html'));
//});

app.post('/insertIncident', function(req, res) {
  console.log(req.body);
  db.collection('activityLogs').insertOne(req.body);
})

app.post('/queryAllIncidents', function(req, res) {
  db.collection('activityLogs').find().toArray(function(err, data) {
    res.json({incidents:data});
  });
})

app.post('/queryActiveIncidents', function(req, res) {
  db.collection('activityLogs').find({"status":true}).toArray(function(err, data) {
    res.json({incidents:data});
  });
})

app.post('/setIncidentStatusFalse', function(req, res) {
  db.collection('activityLogs').updateOne({_id: ObjectId(req.body._id)}, { $set: { status: false } });
})

app.post('/insertComment', function(req, res) {
  db.collection('activityLogs').updateOne({
    _id: ObjectId(req.body._id)}, 
    { $set: 
      {"comments": req.body.comments} 
  });
});

app.post('/queryComments', function(req, res) {
  db.collection('activityLogs').findOne({
    _id: ObjectId(req.body._id)}, 
    function(err, data) {
      res.json({comments:data.comments});
    });
  });

app.get('/queryAllIncidents.json', function(req, res) {
  db.collection('activityLogs').find().toArray(function(err, data) {
    res.json({data});
  });
})

app.get('/queryActiveIncidents.json', function(req, res) {
  db.collection('activityLogs').find({"status":true}).toArray(function(err, data) {
    res.json({data});
  });
})

app.listen(3000);
console.log("Server running on port 3000");

//Install express server
const express = require('express');
const path = require('path');

const app = express();

// Serve only the static files form the dist directory
app.use(express.static(__dirname + '/dist/<name-of-app>'));

app.get('/*', function(req,res) {
    
res.sendFile(path.join(__dirname+'/dist/<name-of-app>/index.html'));
});

// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8080);