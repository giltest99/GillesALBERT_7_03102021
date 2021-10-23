'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Post extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.Post.belongsTo(models.User);
			models.Post.hasMany(models.Comment, { onDelete: 'cascade', hooks: true});
			models.Post.hasMany(models.Like, { onDelete: 'cascade', hooks: true });
    }
  };
  Post.init({
    user_id: DataTypes.INTEGER,
    title: DataTypes.STRING,
    content: DataTypes.TEXT,
    attachment: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Post',
  });
  return Post;
};