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
      models.Notifica.belongsTo(models.Contacto, {
        foreignKey: "id_contacto",
      });

      models.Notifica.belongsTo(models.Alerta, {
        foreignKey: "id_alerta",
      });
    }
  }
  Notifica.init(
    {
      id_contacto: DataTypes.INTEGER,
      id_alerta: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Notifica",
    }
  );
  return Notifica;
};
