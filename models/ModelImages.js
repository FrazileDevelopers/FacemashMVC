'use strict';

const DataTypes = require('sequelize');
const globals = require('../helpers/globals');

const Images = globals.sequelize.define('images', {
  image_id: {
    type: DataTypes.BIGINT(20),
    allowNull: false,
    primaryKey: true,
    unsigned: true,
    autoIncrement: true
  },
  filename: {
    type: DataTypes.STRING(255),
    allowNull: false
  },
  score: {
    type: DataTypes.INTEGER(10),
    allowNull: false,
    unsigned: true,
    defaultValue: 100
  },
  wins: {
    type: DataTypes.INTEGER(10),
    allowNull: false,
    unsigned: true,
    defaultValue: 0
  },
  losses: {
    type: DataTypes.INTEGER(10),
    allowNull: false,
    unsigned: true,
    defaultValue: 0
  }
}, {
  timestamp: true,
  underscored: true,
  freezeTableName: true,
  tableName: 'images'
});

module.exports = Images;