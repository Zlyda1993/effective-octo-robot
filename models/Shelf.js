const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Shelf extends Model {}

Shelf.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    genre: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'shelf',
  }
);

module.exports = Shelf;

