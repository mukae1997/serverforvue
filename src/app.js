const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');
const multer = require('multer');
const path = require('path');
const {
 sequelize
} = require('./models')
const app = express();



const UPLOAD_PATH = "static/img";

var storage = multer.diskStorage({
 destination: function(req, file, cb) {
  cb(null, UPLOAD_PATH);
 },
 filename: function(req, file, cb) {
  cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
 }
});

module.exports = {
 upload: multer({
  storage: storage
  , limits: {
   // fileSize: 1024*10 // bytes
   // may be a callback should be called here to indicate
   // error msg.
  }
  , fileFilter : function(req, file ,cb) {
  checkFileType(file,cb)  // self-define it !
 }
 }),
 UPLOAD_PATH: UPLOAD_PATH
};

function checkFileType(file ,cb) {
 const filetypes  = /jpeg|jpg|gif|png/;
 const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
 const mmtype = filetypes.test(file.mimetype);
 if (mmtype && extname) {
  return cb(null, true);
 } else {
  cb('> Error: Upload sth not Image. ')
 }
}

app.use(morgan('> Combined'));
app.use(bodyParser.json());
app.use(cors());


app.get('/status', (req, res) => {
 res.send({
  mes: "hello baby! : )"
 });
});

require('./routes')(app)

sequelize
 .sync(
  // {force:true}
 )
 .then(() => {
  app.listen(process.env.PORT || 8081);
  console.log("> running ...");
 })
 .catch(err => {
  console.error('Unable to connect to the database:', err);
 });

//  sequelize
// .authenticate()
// .then(() => {
// console.log('Connection has been established successfully.');
// })
// .catch(err => {
// console.error('Unable to connect to the database:', err);
// });
