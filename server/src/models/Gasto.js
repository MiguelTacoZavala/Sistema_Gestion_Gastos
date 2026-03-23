const { DataTypes } = require('sequelize');
const sequelize = require('../db');
const User = require('./User'); // Necesitamos el modelo User para la relación

const Gasto = sequelize.define('Gasto', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  // definimos usuario_id como clave foranea a User.id
  usuario_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: User,
      key: 'id'
    }
  },
  fecha: {
    type: DataTypes.DATEONLY,
    allowNull: false,
  },
  creado_en: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
  },
  descripcion: {
    type: DataTypes.STRING(50),
    allowNull: false,
  },
  monto: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false,
  },
  categoria: {
    type: DataTypes.STRING(50),
    allowNull: false,
  }
}, {
  tableName: 'gasto',
  timestamps: false,
});

// definimos la relacion entre gasto y user
Gasto.belongsTo(User, { foreignKey: 'usuario_id' });

module.exports = Gasto;