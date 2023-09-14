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
      models.Usuario.hasMany(models.Evaluacion, {
        foreignKey: "id_usuario",
        onDelete: "CASCADE",
      });

      models.Usuario.hasMany(models.Contacto, {
        foreignKey: "id_usuario",
        onDelete: "CASCADE",
      });

      models.Usuario.hasMany(models.Alerta, {
        foreignKey: "id_usuario",
        onDelete: "CASCADE",
      });

      models.Usuario.hasMany(models.Denuncia, {
        foreignKey: "id_usuario",
        onDelete: "CASCADE",
      });

      models.Usuario.belongsToMany(models.Contacto, {
        through: "Agrega",
        foreignKey: "id_usuario",
      });

      models.Usuario.hasMany(models.Comentario, {
        foreignKey: "id_usuario",
        onDelete: "CASCADE",
      });
    }
  }
  Usuario.init(
    {
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
    }
  );
  return Usuario;
};
