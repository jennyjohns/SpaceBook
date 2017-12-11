module.exports = function (app) {
  var ceModel = require('../../model/ce/ce.model.server');

  app.get('/api/ce/:ceid', findCEById);
  app.get('/api/ce', findCEsByText);
  app.post('/api/ce', createCE);
  app.put('/api/ce/:ceid', updateCE);
  app.delete('/api/ce/:ceid', deleteCE);

  function findCEById(req, res) {
    var ceId = req.params['ceid'];
    ceModel.findCEById(ceId)
      .then(function (ce) {
        res.json(ce);
      });
  }

  function findCEsByText(req, res) {
    var text = req.query['text'];
    ceModel.findCEsByText(text).then(function (ces) {
      res.json(ces);
    });
  }

  function createCE(req, res) {
    var ce = req.body;
    ceModel
      .createCE(ce)
      .then(function (ce) {
        res.json(ce);
      });
  }

  function updateCE(req, res) {
    var ceId = req.params['ceid'];
    var updatedCE = req.body;
    ceModel
      .updateCE(ceId, updatedCE)
      .then(function (status) {
        res.json(status);
      });
  }

  function deleteCE(req, res) {
    var ceId = req.params['ceid'];
    ceModel.deleteCE(ceId).then(function (any) {
      res.json(null);
    });

  }
};
