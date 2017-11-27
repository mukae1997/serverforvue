const Promise = require('bluebird')


module.exports = (sequelize, DataTypes) => {
 const Code = sequelize.define('Code', {
     title:DataTypes.STRING,
     artist:DataTypes.STRING,
     tab:DataTypes.TEXT,
     code:DataTypes.TEXT,
     createDate:DataTypes.STRING,
     imageId: DataTypes.STRING
   }, {
    hooks: {

    }
   } );


 return Code
}
