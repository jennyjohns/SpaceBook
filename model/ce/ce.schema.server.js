var mongoose = require('mongoose');
var CESchema = mongoose.Schema({
  name: String,
  region: String,
  types: [String],
  wiki: String,
  verified: Boolean,
  picture: String,
  start: Date,
  end: Date
}, {collection: 'ce'});

module.exports = CESchema;
