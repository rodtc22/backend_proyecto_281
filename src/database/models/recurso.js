"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Recurso extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.Recurso.belongsTo(models.Administrador, {
        foreignKey: "id_administrador",
      });

      models.Recurso.hasMany(models.Comentario, {
        foreignKey: "id_recurso",
        onDelete: "CASCADE",
      });
    }
  }
  Recurso.init(
    {
      titulo: DataTypes.STRING,
      tipo: DataTypes.STRING,
      descripcion: DataTypes.STRING,
      url: DataTypes.STRING,
      autor: DataTypes.STRING,
      contenido: DataTypes.STRING,
      visibilidad: DataTypes.BOOLEAN,
      id_administrador: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Recurso",
    }
  );
  return Recurso;
};
