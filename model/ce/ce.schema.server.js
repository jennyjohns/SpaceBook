var mongoose = require('mongoose');
var CESchema = mongoose.Schema({
  name: String,
  region: String,
  types: [String],
  wiki: String,
  verified: Boolean,
  picture: String,
  start: String,
  end: String
}, {collection: 'ce'});

module.exports = CESchema;
