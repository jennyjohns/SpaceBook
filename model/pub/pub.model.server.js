var PubSchema = require("./pub.schema.server");
var mongoose = require('mongoose');
var PubModel = mongoose.model("PubModel", PubSchema);

PubModel.findPubById = findPubById;
PubModel.createPub = createPub;
PubModel.findPubsByText = findPubsByText;
PubModel.updatePub = updatePub;
PubModel.deletePub = deletePub;

module.exports = PubModel;

function findPubsByText(text) {
  return PubModel.find({'name': text});
}


function createPub (pub) {
  return PubModel.create(pub);
}

function findPubById(pubId) {
  return PubModel.findById(pubId);
}

function updatePub(pubId, pub) {
  return PubModel.update({_id: pubId}, pub);
}

function deletePub(pubId) {
  return PubModel.deleteOne({_id: pubId});
}
