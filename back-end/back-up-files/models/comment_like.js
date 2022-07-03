'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Comment_like extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.Post.belongsTo(models.User);
      models.Post.belongsTo(models.Comment);
    }
  };
  Comment_like.init({
    user_id: DataTypes.INTEGER,
    comment_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Comment_like',
  });
  return Comment_like;
};