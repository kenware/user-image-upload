const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Image extends Model {
    static associate(models) {
      Image.belongsTo(models.User, {
        foreignKey: 'userId',
        as: 'users',
      });
    }
  }
  Image.init({
    fileName: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Image',
  });
  return Image;
};
