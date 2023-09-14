"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Recibe extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.Recibe.belongsTo(models.Institucion_Ayuda, {
        foreignKey: "id_inst_ayuda",
      });

      models.Recibe.belongsTo(models.Alerta, {
        foreignKey: "id_alerta",
      });
    }
  }
  Recibe.init(
    {
      id_inst_ayuda: DataTypes.INTEGER,
      id_alerta: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Recibe",
    }
  );
  return Recibe;
};
