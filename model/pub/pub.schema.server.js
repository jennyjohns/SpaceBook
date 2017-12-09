var mongoose = require('mongoose');
var PubSchema = mongoose.Schema({
  name: String,
  authors: [String],
  tags: [String],
  link: String,
  verified: Boolean,
  abstract: String,
  pubDate: Date
}, {collection: 'pub'});

module.exports = PubSchema;
