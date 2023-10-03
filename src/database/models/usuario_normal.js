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
      models.Usuario_normal.hasMany(models.Contacto, {
        foreignKey: "id_usuario",
        onDelete: 'CASCADE',
      });
      // models.Usuario_normal.belongsTo(models.Administrador, {
      //   foreignKey: "id_administrador",
      //   onDelete: 'CASCADE',
      // });
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
    }
  );
  return Usuario_normal;
};
