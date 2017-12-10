module.exports = function (app) {

  var multer = require('multer');
  var upload = multer({dest: __dirname + '/../../dist/assets/uploads'});

  app.post('/api/album/:aid/pic', createPicture);
  app.get('/api/pic/:picid', findPictureById);
  app.get('/api/album/:aid/picture', findPicturesByAlbum);
  app.put('/api/pic/:picid', updatePicture);
  app.delete('/api/pic/:picid', deletePicture);
  app.post('/api/upload', upload.single('myFile'), uploadImage);

  var pictureModel = require('../../model/picture/picture.model.server');

  function createPicture(req, res) {
    console.log('entering create Picture');
    var albumId = req.params['aid'];
    var pic = req.body;
    console.log('the pic body', pic);
    pic.albumId = albumId;
    pictureModel
      .createPicture(pic)
      .then(function (picture) {
        pictureModel
          .findPicturesByAlbum(albumId)
          .then(function (pictures) {
            res.json(pictures);
          });
      });
  }

  function findPictureById(req, res) {
    var picId = req.params['picid'];
    pictureModel
      .findPictureById(picId)
      .then(function (picture) {
        res.json(picture);
      });
  }

  function findPicturesByAlbum(req, res) {
    var albumId = req.params['aid'];
    pictureModel
      .findPicturesByAlbum(albumId)
      .then(function (pictures) {
        res.json(pictures);
      });
  }

  function updatePicture(req, res) {
    var picId = req.params['picid'];
    var updatedPicture = req.body;
    pictureModel
      .updatePicture(picId, updatedPicture)
      .then(function (status) {
        res.json(status);
      });
  }

  function deletePicture(req, res) {
    var picId = req.params['picid'];
    pictureModel
      .deletePicture(picId)
      .then(function (pictures) {
        res.json(pictures);
      });
  }

  function uploadImage(req, res) {
    console.log('entering uploadImage');
    var pictureId = req.body.pictureId;
    console.log('pictureId', pictureId);
    var width1 = req.body.width1;
    console.log('width', width1);
    var myFile = req.file;
    console.log('myFile', myFile);
    var userId = req.body.userId;
    console.log('userId', userId);
    var albumId = req.body.albumId;
    console.log('albumId', albumId);

    var originalName = myFile.originalname;
    console.log('orginalName', originalName);
    var fileName = myFile.filename;
    console.log('fileName', fileName);
    var path = myFile.path;
    console.log('path', path);
    var destination = myFile.destination;
    console.log('destination', destination);
    var size = myFile.size;
    console.log('size', size);
    var mimetype = myFile.mimetype;
    console.log('mimetype', mimetype);

    var pic1 = {};
    pic1.title =fileName;
    pic1.text=fileName;
    pic1.url = '/assets/uploads/' + fileName;
    pic1.width = width1;
    pic1.albumId = albumId;
        console.log('pic1 is', pic1);
        // pic1.save();
        // console.log('PICTURE', pic1);
        return pictureModel
          .createPicture(pic1)
          .then(function (pic) {
            pic.save();
            var callbackUrl = '/user/' + userId + '/album/' + albumId;
            res.redirect(callbackUrl);
          });
    };

};
