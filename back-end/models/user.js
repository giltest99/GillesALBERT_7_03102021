'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.User.hasMany(models.Post, { onDelete: 'cascade', hooks: true });
			models.User.hasMany(models.Comment, { onDelete: 'cascade', hooks: true });
			models.User.hasMany(models.Post_like, { onDelete: 'cascade', hooks: true });
      models.User.hasMany(models.Post_disislike, { onDelete: 'cascade', hooks: true });
      models.User.hasMany(models.Comment_like, { onDelete: 'cascade', hooks: true });
      models.User.hasMany(models.Comment_dislike, { onDelete: 'cascade', hooks: true });
    }
  };
  User.init({
    username: DataTypes.STRING,
    password: DataTypes.STRING,
    email: DataTypes.STRING,
    avatar: DataTypes.STRING,
    biography: DataTypes.TEXT,
    is_admin: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};