"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Notifica extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.Notifica.belongsToMany(models.Contacto, {
        through: models.Notifica,
        foreignKey: "id_contacto",
        onDelete: 'CASCADE',
      });
      models.Notifica.belongsToMany(models.Alerta, {
        through: models.Notifica,
        foreignKey: "id_alerta",
        onDelete: 'CASCADE',
      });
    }
  }
  Notifica.init(
    {
      id_notifica: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      id_contacto: DataTypes.INTEGER,
      id_alerta: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Notifica",
      tableName: "Notificas",
    }
  );
  return Notifica;
};
