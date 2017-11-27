const Promise = require('bluebird')


module.exports = (sequelize, DataTypes) => {
 const Image = sequelize.define('Image', {
  filename: DataTypes.STRING,
  createDate: DataTypes.STRING,
  originalname:DataTypes.STRING,
  mimetype:DataTypes.STRING
 });


 return Image
}
