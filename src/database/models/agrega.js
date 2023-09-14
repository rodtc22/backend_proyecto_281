"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Agrega extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.Agrega.belongsTo(models.Usuario, {
        foreignKey: "id_usuario",
      });

      models.Agrega.belongsTo(models.Contacto, {
        foreignKey: "id_contacto",
      });
    }
  }
  Agrega.init(
    {
      id_usuario: DataTypes.INTEGER,
      id_contacto: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Agrega",
    }
  );
  return Agrega;
};
