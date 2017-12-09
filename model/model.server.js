var mongoose = require("mongoose");
var connectionString = 'mongodb://localhost:/spacebook'; // for local
if(process.env.MLAB_USERNAME_WEBDEV) { // check if running remotely
  var username = process.env.MLAB_USERNAME_WEBDEV; // get from environment
  var password = process.env.MLAB_PASSWORD_WEBDEV;
  connectionString = 'mongodb://' + username + ':' + password;
  connectionString += 'ds139949.mlab.com:39949/heroku_0tl59x6b';
}

var db = mongoose.connect(connectionString);

module.exports = db;
