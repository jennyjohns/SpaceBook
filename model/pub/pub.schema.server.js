var mongoose = require('mongoose');
var PubSchema = mongoose.Schema({
  name: String,
  authors: [String],
  tags: [String],
  link: String,
  verified: Boolean,
  abstract: String,
  pubDate: String
}, {collection: 'pub'});

module.exports = PubSchema;
