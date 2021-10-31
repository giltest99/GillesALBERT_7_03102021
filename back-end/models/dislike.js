'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Dislike extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.Post.belongsTo(models.User);
      models.Post.belongsTo(models.Post);
      models.Post.belongsTo(models.Comment);
    }
  };
  Dislike.init({
    user_id: DataTypes.INTEGER,
    post_id: DataTypes.INTEGER,
    comment_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Dislike',
  });
  return Dislike;
};