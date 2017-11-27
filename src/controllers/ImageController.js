const fs = require('fs')
const {
 Image
} = require('../models')
const path = require('path')
const {
 UPLOAD_PATH
} = require('../app')
module.exports = {
 async getAllImg(req, res, next) {

  const imgs = await Image.findAll({
   limit: 10
  });
  for (var i = 0; i < imgs.length; i++) {
   var aImg = imgs[i];
   var imgUrl = req.protocol + '://' + req.get('host') + '/img/' + aImg.id;

  }
  res.json(imgs);

 },
 async getOneImg(req, res, next) {
  var imgUrl = req.protocol + '://' + req.get('host') + '/img/' + req.params.id;

  const img = await Image.findOne({
   where: {
    id: req.params.id
   }
  });

  res.setHeader('Content-Type', img.mimetype);
  fs.createReadStream(path.join(UPLOAD_PATH, img.filename)).pipe(res);
 },
 async postImg(req, res, next) {
  try {
   console.log('> req.file: ', req.file);
   console.log(req.body);
   const img = await Image.create({
    filename: req.file.filename,
    createDate: 'today',
    originalname: req.file.originalname,
    mimetype: req.file.mimetype
   });

   res.status(200).send({
    img
   });
  } catch (e) {
   console.log(e);
  }

 },
 deleteImg(req, res, next) {
  // TODO
 }
}
