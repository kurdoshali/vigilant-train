'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Person extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Person.init({
    type: DataTypes.STRING,
    position: DataTypes.STRING,
    name: DataTypes.STRING,
    picture_url: DataTypes.STRING,
    major: DataTypes.STRING,
    minor: DataTypes.STRING,
    hometown: DataTypes.STRING,
    biography: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'Person',
    tableName: 'People',
  });
  return Person;
};