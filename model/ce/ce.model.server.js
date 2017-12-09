var CESchema = require("./ce.schema.server");
var mongoose = require('mongoose');
var CEModel = mongoose.model("CEModel", CESchema);

CEModel.findCEById = findCEById;
CEModel.createCE = createCE;
CEModel.findCEsByText = findCEsByText;
CEModel.updateCE = updateCE;
CEModel.deleteCE = deleteCE;

module.exports = CEModel;

function findCEsByText(text) {
  return CEModel.find({'name': text});
}


function createCE (ce) {
  return CEModel.create(ce);
}

function findCEById(ceId) {
  return CEModel.findById(ceId);
}

function updateCE(ceId, ce) {
  return CEModel.update({_id: ceId}, ce);
}

function deleteCE(ceId) {
  return CEModel.deleteOne({_id: ceId});
}
