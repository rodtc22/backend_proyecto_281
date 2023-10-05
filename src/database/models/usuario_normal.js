"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Usuario_normal extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.Usuario_normal.belongsTo(models.Usuario, {
        foreignKey: "id_usuario",
        onDelete: 'CASCADE'
      });
      models.Usuario_normal.belongsTo(models.Administrador, {
        foreignKey: "id_administrador",
        onDelete: 'CASCADE',
      });
      models.Usuario_normal.hasMany(models.Evaluacion, {
        foreignKey: "id_usuario",
        onDelete: 'CASCADE',
      });
      models.Usuario_normal.hasMany(models.Alerta, {
        foreignKey: "id_usuario",
        onDelete: 'CASCADE',
      });

      models.Usuario_normal.hasMany(models.Comentario, {
        foreignKey: "id_usuario",
        onDelete: 'CASCADE',
      });

      models.Usuario_normal.hasMany(models.Denuncia, {
        foreignKey: "id_usuario",
        onDelete: 'CASCADE',
      });


      models.Usuario.belongsToMany(models.Contacto, {
        through: models.Agrega,
        foreignKey: "id_usuario",
        onDelete: 'CASCADE',
      });

    }
  }
  Usuario_normal.init(
    {
      id_usuario: {
        allowNull: false,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      estado: DataTypes.STRING,
      fecha_registro: DataTypes.DATE,
      id_administrador: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Usuario_normal",
      tableName: "Usuario_normals",
    }
  );
  return Usuario_normal;
};
