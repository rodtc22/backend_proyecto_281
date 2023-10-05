"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Usuario extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.Usuario.hasOne(models.Usuario_normal, {
        foreignKey: "id_usuario",
        onDelete: 'CASCADE'
      });
      models.Usuario.hasOne(models.Administrador, {
        foreignKey: "id_usuario",
        onDelete: 'cascade',
      });

    }
  }
  Usuario.init(
    {
      id_usuario: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      ci: DataTypes.STRING,
      nombre: DataTypes.STRING,
      fecha_nac: DataTypes.DATE,
      genero: DataTypes.STRING,
      direccion: DataTypes.STRING,
      correo: DataTypes.STRING,
      telefono: DataTypes.STRING,
      nombre_usuario: DataTypes.STRING,
      contrasenia: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Usuario",
      tableName: "Usuarios",
    }
  );
  return Usuario;
};
