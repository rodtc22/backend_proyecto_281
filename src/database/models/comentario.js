"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Comentario extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.Comentario.belongsTo(models.Usuario_normal, {
        foreignKey: "id_usuario",
        onDelete: "CASCADE",
      });
      models.Comentario.belongsTo(models.Administrador, {
        foreignKey: "id_administrador",
        onDelete: "CASCADE",
      });
      models.Comentario.belongsTo(models.Recurso, {
        foreignKey: "id_recurso",
        onDelete: "CASCADE",
      });
    }
  }
  Comentario.init(
    {
      id_comentario: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      fecha: DataTypes.DATE,
      descripcion: DataTypes.STRING,
      estado: DataTypes.BOOLEAN,
      id_administrador: DataTypes.INTEGER,
      id_recurso: DataTypes.INTEGER,
      id_usuario: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Comentario",
      tableName: "Comentarios",
    }
  );
  return Comentario;
};
