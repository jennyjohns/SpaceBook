/**
 * Created by sesha on 6/2/17.
 */

// Get the dependencies

var express = require('express');
var path = require('path');
var http = require('http');
var bodyParser = require('body-parser');
var app = express();
var cookieParser = require('cookie-parser');
var session      = require('express-session');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());

// DON'T FORGET TO CHANGE THIS LATER!
app.use(session({ secret: process.env.SESSION_SECRET }));
// app.use(session({ secret: "stringSecret124" }));

var passport = require('passport');

app.use(passport.initialize());
app.use(passport.session());



// Point static path to dist -- For building -- REMOVE
app.use(express.static(path.join(__dirname, 'dist')));



// CORS
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "http://localhost:4200");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  res.header("Access-Control-Allow-Credentials", "true");
  next();
});


// load, and configure body parser module
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/hello', function(req, res){
  res.send('hello from node js')
})



var port = process.env.PORT || '3100';
app.set('port', port);


// Create HTTP server
var server = http.createServer(app);

var serverSide = require("./server/app");
serverSide(app);



// For Build: Catch all other routes and return the index file -- BUILDING
app.get('*', function (req, res) {
  res.send('default');
//  res.sendFile(path.join(__dirname, 'dist/index.html'));
});


server.listen( port, function() {console.log('Running'); });
