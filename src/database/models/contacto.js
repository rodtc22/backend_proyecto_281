"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Contacto extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.Contacto.belongsToMany(models.Usuario_normal, {
        through: models.Agrega,
        foreignKey: "id_contacto",
        onDelete: 'CASCADE',
      });

      models.Contacto.belongsToMany(models.Alerta, {
        through: models.Notifica,
        foreignKey: "id_contacto",
        onDelete: 'CASCADE',
      });
    }
  }
  Contacto.init(
    {
      id_contacto: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      nombre_contacto: DataTypes.STRING,
      fecha_ac: DataTypes.DATE,
      telefono: DataTypes.STRING,
      id_usuario: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Contacto",
      tableName: "Contactos",
    }
  );
  return Contacto;
};
