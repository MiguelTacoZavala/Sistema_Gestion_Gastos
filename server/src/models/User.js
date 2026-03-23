const { DataTypes } = require('sequelize');
const sequelize = require('../db');
const Gasto = require('./Gasto');

const User = sequelize.define('User', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  username: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}, {
  tableName: 'usuario', 
  timestamps: false,
});

// definimos la relacion entre user y gasto
User.hasMany(Gasto, { foreignKey: 'usuario_id' });

module.exports = User;