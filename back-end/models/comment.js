'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Comment extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.Post.belongsTo(models.User);
      models.Post.belongsTo(models.Post);
      models.Post.hasMany(models.Comment_like, { onDelete: 'cascade', hooks: true });
      models.Post.hasMany(models.Comment_dislike, { onDelete: 'cascade', hooks: true });
    }
  };
  Comment.init({
    user_id: DataTypes.INTEGER,
    content: DataTypes.TEXT,
    post_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Comment',
  });
  return Comment;
};